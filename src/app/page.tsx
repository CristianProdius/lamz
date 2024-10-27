import Clients from "@/components/clients";
import { CTA } from "@/components/cta";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gurantee from "@/components/goruntee";
import HeroSection from "@/components/hero";
import IncludedSection from "@/components/inlcuded";
import SuccessSection from "@/components/SuccessSection";
import TeamMember from "@/components/lamz";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Clients />

      <Features />
      <Gurantee />
      <SuccessSection />
      <IncludedSection />
      <TeamMember />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
