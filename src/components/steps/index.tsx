// Phases.tsx
"use client";
import React from "react";
import Step from "./step";
import { motion, useInView } from "framer-motion";

const Steps = [
  {
    title: "Step 01",
    subtitle: "Becoming a creator",
    description: "Have your first course created and uploaded",
    step: 1,
  },
  {
    title: "Step 02",
    subtitle: "Cross Uploading",
    description: "Optimized profiles in OCM to maximise traffic",
    step: 2,
  },
  {
    title: "Step 03",
    subtitle: "Branding",
    description:
      "Move your courses to your website and create a brand around your passion",
    step: 3,
  },
];

const Phases = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#5d2ca8]  text-white px-4 py-16 sm:py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex flex-col items-center mb-6" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center bg-white/15 backdrop-blur-sm rounded-lg px-6 py-2 border border-white/10 shadow-lg"
            >
              <span className="text-sm font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                What will I Do?
              </span>
            </motion.div>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-center text-5xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-12"
          >
            Here are the steps that you will take
          </motion.h2>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {Steps.map(({ title, subtitle, description, step }, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.1,
                ease: "easeOut",
              }}
              key={title}
            >
              <Step
                title={title}
                subtitle={subtitle}
                description={description}
                step={step}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phases;
