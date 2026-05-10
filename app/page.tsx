import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Problem from "@/components/problem";
import Features from "@/components/features";
import HowItWorks from "@/components/how-it-works";
import UseCases from "@/components/use-cases";
import Stats from "@/components/stats";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <Hero />
      <Partners />
      <Problem />
      <Features />
      <HowItWorks />
      <UseCases />
      <Stats />
      <Testimonials />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
