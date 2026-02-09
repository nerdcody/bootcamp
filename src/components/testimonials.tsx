import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer at Shopify",
    content:
      "This bootcamp completely changed my career trajectory. The project-based approach meant I had a portfolio that actually impressed hiring managers. Landed my dream job within 2 months of graduating.",
  },
  {
    name: "Marcus Johnson",
    role: "Full Stack Developer at Stripe",
    content:
      "The 1:1 mentorship was a game-changer. Having someone review my code and guide my learning made all the difference. The curriculum is incredibly well-structured and up-to-date.",
  },
  {
    name: "Priya Patel",
    role: "Software Engineer at Vercel",
    content:
      "I tried self-learning for a year before joining this bootcamp. The structured approach and real-world projects accelerated my learning 10x. Best investment I've ever made.",
  },
  {
    name: "David Kim",
    role: "Backend Developer at Notion",
    content:
      "The capstone project alone was worth the entire bootcamp. Building a production app from scratch with proper CI/CD and deployment gave me real confidence for job interviews.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Graduates Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from developers who went through the bootcamp and transformed
            their careers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="transition-all hover:shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
