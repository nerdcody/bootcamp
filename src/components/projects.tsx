import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Globe, BarChart3, Kanban } from "lucide-react";

const projects = [
  {
    icon: Globe,
    title: "Personal Website",
    description:
      "Your first team project. Build and deploy a polished personal portfolio site with modern design, responsive layouts, and smooth animations.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Vercel"],
  },
  {
    icon: ShoppingCart,
    title: "Discount Marketplace",
    description:
      "A platform where stores post their discount deals and customers browse and buy through the app. Real business value with commission-based revenue.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
  },
  {
    icon: BarChart3,
    title: "Book Exchange Platform",
    description:
      "A marketplace for international school students to sell their used textbooks and for other students to buy them at affordable prices. Save money, reduce waste, and help fellow students.",
    stack: ["Next.js", "PostgreSQL", "Stripe"],
  },
  {
    icon: Kanban,
    title: "Capstone Project",
    description:
      "Your team picks a real problem and builds a full-stack product from scratch. Plan, code, deploy, and present it on demo day.",
    stack: ["Full Stack", "Team Choice", "CI/CD", "Production"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            What I Built
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects You&apos;ll Build
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These are real projects I built during the bootcamp. You&apos;ll
            build the same ones, learning every step of the process.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
                  <project.icon className="h-6 w-6 text-violet-600" />
                </div>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
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
