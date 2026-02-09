import { Badge } from "@/components/ui/badge";
import {
  MonitorPlay,
  Users,
  FolderGit2,
  Headphones,
  Trophy,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Live Coding Sessions",
    description:
      "Watch real projects being built from scratch. Every session is recorded so you can revisit anytime.",
  },
  {
    icon: Users,
    title: "Small Cohort Size",
    description:
      "Max 25 students per cohort ensures personalized attention and meaningful peer collaboration.",
  },
  {
    icon: FolderGit2,
    title: "Real-World Projects",
    description:
      "Build 4+ real-world projects including e-commerce apps, dashboards, and a full capstone project.",
  },
  {
    icon: Headphones,
    title: "1:1 Mentorship",
    description:
      "Weekly one-on-one sessions with your mentor for code reviews, career advice, and problem-solving.",
  },
  {
    icon: Trophy,
    title: "Career Support",
    description:
      "Resume reviews, LinkedIn optimization, and direct introductions to hiring partners.",
  },
  {
    icon: Rocket,
    title: "Incubator Program",
    description:
      "Selected students get the opportunity to join our incubator program and launch their projects as co-founders.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            More Than Just a Course
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            This isn&apos;t a classroom. You join a squad, pick up tickets, pair
            program, review code, and ship features together—exactly like a real
            dev team.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
