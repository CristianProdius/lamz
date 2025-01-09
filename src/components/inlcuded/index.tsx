"use client";
import React, { useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Check } from "lucide-react";

// Create a reusable card component with the glow effect
const GlowingCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(200px 200px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (cardRef.current === null) return;
      const rect = cardRef.current.getBoundingClientRect();
      offsetX.set(e.clientX - rect.x);
      offsetY.set(e.clientY - rect.y);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [offsetX, offsetY]);

  return (
    <motion.div
      ref={cardRef}
      className={`relative border border-white/10 rounded-xl group hover:border-white/30 ${className}`}
    >
      <motion.div
        className="absolute inset-0 border-2 border-[#fee370] rounded-xl opacity-0 group-hover:opacity-100"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

interface IncludedSectionProps {
  onOpenModal: () => void;
}

const IncludedSection = ({ onOpenModal }: IncludedSectionProps) => {
  const features = [
    "Set proper foundations in your course creation business.",
    "Combine your passion and expertise with a profitable niche & create an in-demand course.",
    "Get accepted in online course marketplaces with our proven framework.",
    "Leverage course marketplace organic traffic to bring steady enrollments to your courses",
    "Build courses that circulate students to other digital products of yours to create an evergreen business",
    "Learn when and how to move your course to your own website and increase profit margins",
    "Systemise your business & deliver kickass results.",
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center bg-white/10 rounded-lg px-4 py-1.5"
          >
            <span className="text-sm font-medium text-white ">
              Belive me its a lot
            </span>
          </motion.div>
        </div>
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter text-white mb-24">
          Here is what you get in the program
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <GlowingCard key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-1 mt-1 flex-shrink-0">
                    <Check className="w-4 h-4 text-[#3e1a84]" />
                  </div>
                  <p className="text-white/80 text-lg">{feature}</p>
                </div>
              </GlowingCard>
            ))}
          </div>

          <div className="space-y-8">
            <GlowingCard className="p-8 bg-[#3e1a84]/40">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Endgame?
              </h3>
              <p className="text-white/80 text-lg">
                You build an online course business that scales easily & you
                become a successful entrepreneur by teaching thousands of people
                the things you love.
              </p>
            </GlowingCard>

            <GlowingCard className="p-8 bg-[#3e1a84]/40">
              <h3 className="text-2xl font-bold text-white mb-4">
                What are you waiting for?
              </h3>
              <p className="text-white/80 text-lg mb-6">
                We guarantee that we will not stop working with you until you
                see results, so it&apos;s risk-free. Students get 3+ 1 on 1
                weekly coaching calls & access to a bustling course creation
                community. That&apos;s about it.
              </p>
              <p className="text-white/80 text-lg">
                If you want to transform your online course business from a
                source of pain/struggle to a source of pleasure/freedom,
                Schedule A Call.
              </p>
            </GlowingCard>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="w-full bg-white text-black py-4 px-8 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all"
              onClick={onOpenModal}
            >
              Watch Free Training →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
