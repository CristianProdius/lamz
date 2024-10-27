import Clients from "@/components/clients";
import { CTA } from "@/components/cta";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gurantee from "@/components/goruntee";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Clients />

      <Features />
      <Gurantee />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
