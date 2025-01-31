"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Clients = () => {
  const logos = [
    "coursera",
    "kajabi",
    "Linkedin",
    "skillshare",
    "skillsuccess",
    "teachable",
    "udmey",
  ];

  return (
    <div className="py-8 bg-black md:py-12">
      <div className="max-w-3xl sm:max-w-5xl mx-auto">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map((logo) => (
              <React.Fragment key={logo}>
                <Image
                  src={`/clients/${logo}.webp`}
                  className="h-6 w-auto object-contain max-w-none "
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={`${logo} Logo`}
                />
              </React.Fragment>
            ))}
            {/* Second set of logos for animation */}
            {logos.map((logo) => (
              <React.Fragment key={`second-${logo}`}>
                <Image
                  src={`/clients/${logo}.webp`}
                  className="h-6 w-auto object-contain max-w-none "
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt={`${logo} Logo`}
                />
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
