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
  const isInView = useInView(ref);

  return (
    <div className="bg-[#5d2ca8] text-white px-4 py-8 sm:py-28  ">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center mb-4" ref={ref}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white/10 rounded-lg px-4 py-1.5"
            >
              <span className="text-sm font-medium text-white">
                What will i Do?
              </span>
            </motion.div>
          </div>
          <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter text-white mb-12">
            Here are the steps that you will take
          </h2>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-8">
          {Steps.map(({ title, subtitle, description, step }) => (
            <Step
              title={title}
              subtitle={subtitle}
              description={description}
              key={title}
              step={step}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phases;
