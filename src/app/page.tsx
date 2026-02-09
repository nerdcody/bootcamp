import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Curriculum } from "@/components/curriculum";
import { Features } from "@/components/features";
import { Projects } from "@/components/projects";
// import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { RegistrationForm } from "@/components/registration-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Curriculum />
        <Features />
        <Projects />
        {/* <Testimonials /> */}
        <Pricing />
        <RegistrationForm />
      </main>
      <Footer />
    </div>
  );
}
