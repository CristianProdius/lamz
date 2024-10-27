"use client";
import React, { useRef, useEffect } from "react";

import { motion, useAnimation, useInView } from "framer-motion";

import TestimonialSection from "./testimonials";

const Gurantee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24 px-2">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter">
            Start Scaling Your Course Empire
          </h2>
        </motion.div>
        <div className="max-w-6xl mx-auto mt-8">
          <motion.p
            className="text-lg sm:text-xl text-center text-white/80 mt-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Most course creators don't realize how much revenue potential is
            lost through inefficient course creation and marketing systems. They
            waste time and resources on scattered tactics that don't address the
            fundamental issues—leaving them stuck with low enrollments and
            unable to scale their course business. LAMZ Course Creation changes
            that.
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-center text-white/80 mt-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We go well beyond basic course creation: we transform your entire
            educational business infrastructure. From content development to
            student acquisition and engagement, our proven framework
            revolutionizes how your online course business performs.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl text-center text-white/80 mt-6"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Win back your time, maximize your impact, and unlock sustainable
            course income. Book a call now and let us build a proven,
            student-focused system that supports your teaching empire.
          </motion.p>
        </div>
        <TestimonialSection />
      </div>
    </div>
  );
};

export default Gurantee;
