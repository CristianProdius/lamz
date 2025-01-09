"use client";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import TestimonialSection from "./testimonials";

interface GuaranteeProps {
  onOpenModal: () => void;
}

const Guarantee = ({ onOpenModal }: GuaranteeProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cards = [
    {
      title: "Start Scaling Your Course Empire",
      isHeading: true,
    },
    {
      text: "Most course creators don't realize how much revenue potential is lost through inefficient course creation and marketing systems.",
      icon: "📊",
    },
    {
      text: "They waste time and resources on scattered tactics that don't address the fundamental issues—leaving them stuck with low enrollments and unable to scale their course business. Course Creation Academy changes that.",
      icon: "🎯",
    },
    {
      text: "We go well beyond basic course creation: we transform your entire educational business infrastructure.",
      icon: "🚀",
    },
    {
      text: "From content development to student acquisition and engagement, our proven framework revolutionizes how your online course business performs.",
      icon: "⚡",
    },
    {
      text: "Win back your time, maximize your impact, and unlock sustainable course income.",
      icon: "💎",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#3a1c68] to-[#5d2ca8] py-20 px-6">
      <div className="container mx-auto max-w-7xl" ref={ref}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`mb-6 ${card.isHeading ? "" : "max-w-4xl mx-auto"}`}
          >
            {card.isHeading ? (
              <h2 className="text-5xl md:text-7xl font-bold text-center text-white tracking-tight leading-[1.2] pb-8 mb-12">
                {card.title}
              </h2>
            ) : (
              <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 shadow-xl border border-purple-500/20 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{card.icon}</span>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: cards.length * 0.2 }}
          className="mt-12 text-center"
        >
          <button
            onClick={onOpenModal}
            className="bg-white text-black sm:text-xl py-3 px-4 sm:py-5 sm:px-9 rounded-lg font-semibold inline-flex items-center justify-center gap-1 transform transition-transform duration-200 hover:scale-105"
          >
            <span>Watch Free Training</span>
          </button>
        </motion.div>

        <TestimonialSection />
      </div>
    </div>
  );
};

export default Guarantee;
