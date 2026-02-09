import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Globe,
  Server,
  Database,
  Layout,
  GitBranch,
  Rocket,
} from "lucide-react";

const modules = [
  {
    week: "Week 1-2",
    title: "Squad Up & Ship Your First Site",
    description:
      "Form your squad, set up the repo, agree on workflows, and jump straight into building a personal website together. No theory, just coding together from day one.",
    icon: Globe,
    topics: [
      "Git & GitHub",
      "Team Workflows",
      "Personal Website",
      "Code Reviews",
    ],
  },
  {
    week: "Week 3-4",
    title: "Full Frontend App",
    description:
      "Ship a complete frontend for a real product using React/Next.js and shadcn/ui. Focus on components, state, and user experience while coding as a team.",
    icon: Layout,
    topics: ["React/Next.js", "shadcn/ui", "Routing", "State"],
  },
  {
    week: "Week 5-6",
    title: "Backend & APIs",
    description:
      "Design and implement the backend for your app: APIs, business logic, and data flow. Everything is built hands-on in pairs and small groups.",
    icon: Rocket,
    topics: ["API Design", "Business Logic", "Error Handling", "Testing"],
  },
  {
    week: "Week 7-8",
    title: "Data & Auth Sprint",
    description:
      "Plug in a real database and add authentication to your projects. You learn how by wiring it up directly in code with your team.",
    icon: Server,
    topics: [
      "Database Integration",
      "Auth Flows",
      "Sessions",
      "Security Basics",
    ],
  },
  {
    week: "Week 9-10",
    title: "Second Product Build",
    description:
      "Start a new product from scratch as a team with everything you’ve learned. Move faster, split work, and behave like a real product squad.",
    icon: Database,
    topics: ["Planning", "Team Ownership", "Feature Shipping", "Refactoring"],
  },
  {
    week: "Week 11-12",
    title: "Capstone & Launch",
    description:
      "Polish, deploy, and present your capstone project. Focus on stability, deployment, and telling the story of what your team built.",
    icon: GitBranch,
    topics: ["Deployment", "Monitoring", "Demo Day", "Portfolio"],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Curriculum
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What You&apos;ll Learn
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A 12-week sprint-style schedule where you join a real dev squad and
            learn by planning, coding, and shipping multiple products together.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <Card
              key={mod.title}
              className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <mod.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {mod.week}
                </p>
                <CardTitle className="text-lg">{mod.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {mod.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1.5">
                  {mod.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
