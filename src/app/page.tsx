"use client";
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
import OnlineEducationGraph from "@/components/graph";
import Phases from "@/components/steps";

export default function Home() {
  return (
    <div>
      <style jsx global>{`
        html,
        body {
          overflow: auto;
          scrollbar-width: none; /* Firefox */
        }

        /* For Chrome, Safari, and Edge */
        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <HeroSection />
      <Clients />

      <Features />
      <Gurantee />

      <SuccessSection />
      <IncludedSection />
      <OnlineEducationGraph />
      <Phases />
      <TeamMember />
      <Testimonials />
      <Faq />

      <CTA />
      <Footer />
    </div>
  );
}
