import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const included = [
  "12 weeks of hands-on team coding",
  "4+ real-world projects for your portfolio",
  "1:1 mentorship & code reviews",
  "Career support & LinkedIn optimization",
  "Incubator program eligibility",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="mb-4">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Invest in Your Future
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Affordable pricing designed for university students. Pay a one-time
            admission fee and a simple monthly fee for the duration of the
            bootcamp.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <Card className="relative overflow-hidden border-2 border-violet-200 dark:border-violet-800">
            <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-violet-600 to-indigo-600" />
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Bootcamp Plan</CardTitle>
              <CardDescription>
                Everything you need to become a full stack developer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Admission Fee (one-time)
                  </p>
                  <p className="mt-1 text-4xl font-bold tracking-tight">
                    Rs. 9,900
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Separator className="flex-1" />
                  <span className="text-xs font-medium text-muted-foreground">
                    PLUS
                  </span>
                  <Separator className="flex-1" />
                </div>

                <div className="rounded-lg bg-muted/50 p-4 text-center">
                  <p className="text-sm font-medium text-muted-foreground">
                    Monthly Fee
                  </p>
                  <p className="mt-1 text-4xl font-bold tracking-tight">
                    Rs. 4,990
                    <span className="text-base font-normal text-muted-foreground">
                      /month
                    </span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    for 3 months (Rs. 14,970 total)
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <p className="text-sm font-semibold">Everything included:</p>
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
                    <span className="text-sm text-muted-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full gap-2" asChild>
                <Link href="#register">
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
