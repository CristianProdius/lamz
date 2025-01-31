// page.tsx
"use client";
import { useState } from "react";
import Clients from "@/components/clients";
import { CTA } from "@/components/cta";
import Faq from "@/components/faq";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Gurantee from "@/components/goruntee";
import HeroSection from "@/components/hero";
import Modal from "@/components/modal";
import IncludedSection from "@/components/inlcuded";
import SuccessSection from "@/components/SuccessSection";
import TeamMember from "@/components/lamz";
import { Testimonials } from "@/components/testimonials";
import OnlineEducationGraph from "@/components/graph";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          overflow: auto;
          scrollbar-width: none;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <HeroSection onOpenModal={handleModalOpen} />
      <Clients />
      <Features />
      <Gurantee onOpenModal={handleModalOpen} />
      <SuccessSection />
      <IncludedSection onOpenModal={handleModalOpen} />
      <OnlineEducationGraph />

      <TeamMember />
      <Testimonials />
      <Faq />
      <CTA onOpenModal={handleModalOpen} />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
