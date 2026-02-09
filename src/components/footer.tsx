import Link from "next/link";
import { Code2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">
              FullStack<span className="text-primary">Bootcamp</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#curriculum"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Curriculum
            </Link>
            <Link
              href="#features"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Why Us
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Projects
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#register"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Register
            </Link>
          </nav>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} FullStackBootcamp. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
