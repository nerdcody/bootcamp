import { NextResponse } from "next/server";

// Lightweight health check for Cloud Run
// Cloud Run calls this to verify the container is running and responsive
export async function GET() {
  return NextResponse.json(
    { status: "ok", message: "Server is running" },
    { status: 200 },
  );
}
