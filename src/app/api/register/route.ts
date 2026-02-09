import { NextResponse } from "next/server";
import { z } from "zod";

const registrationSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  university: z.string().min(2),
  yearOfStudy: z.string().min(1),
  motivation: z.string().min(20).max(500),
});

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL || "";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = registrationSchema.parse(body);

    // Format Slack message with blocks for better formatting
    const slackMessage = {
      blocks: [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: "🎓 New Bootcamp Registration",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            {
              type: "mrkdwn",
              text: `*Name:*\n${data.firstName} ${data.lastName}`,
            },
            {
              type: "mrkdwn",
              text: `*Email:*\n${data.email}`,
            },
            {
              type: "mrkdwn",
              text: `*Phone:*\n${data.phone}`,
            },
            {
              type: "mrkdwn",
              text: `*University:*\n${data.university}`,
            },
            {
              type: "mrkdwn",
              text: `*Year of Study:*\n${data.yearOfStudy}`,
            },
            {
              type: "mrkdwn",
              text: `*Registered At:*\n${new Date().toLocaleString()}`,
            },
          ],
        },
        {
          type: "divider",
        },
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: `*Motivation:*\n${data.motivation}`,
          },
        },
      ],
    };

    // Send to Slack (only if webhook URL is configured)
    if (!SLACK_WEBHOOK_URL) {
      console.warn("SLACK_WEBHOOK_URL not configured, skipping Slack notification");
    } else {
      try {
        // Try blocks format first
        const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(slackMessage),
        });

        const responseText = await slackResponse.text();

        if (!slackResponse.ok || responseText !== "ok") {
          console.error("Slack API error:", slackResponse.status, responseText);

          // Try fallback simple text format
          const simpleMessage = {
            text: `🎓 New Bootcamp Registration\n\n*Name:* ${data.firstName} ${data.lastName}\n*Email:* ${data.email}\n*Phone:* ${data.phone}\n*University:* ${data.university}\n*Year of Study:* ${data.yearOfStudy}\n*Registered At:* ${new Date().toLocaleString()}\n\n*Motivation:*\n${data.motivation}`,
          };

          const fallbackResponse = await fetch(SLACK_WEBHOOK_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(simpleMessage),
          });

          const fallbackText = await fallbackResponse.text();
          if (!fallbackResponse.ok || fallbackText !== "ok") {
            console.error(
              "Slack fallback also failed:",
              fallbackResponse.status,
              fallbackText,
            );
          }
        }
      } catch (slackError) {
        console.error("Failed to send to Slack:", slackError);
        // Continue even if Slack fails - registration should still succeed
      }
    }

    return NextResponse.json(
      { message: "Registration successful" },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Validation failed", errors: error.issues },
        { status: 400 },
      );
    }

    console.error("Registration error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { message: errorMessage, error: String(error) },
      { status: 500 },
    );
  }
}
