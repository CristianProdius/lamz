"use client";
import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import Image from "next/image";

export const clientPic = [
  { src: "/clientPicture/1.webp", alt: "client" },
  { src: "/clientPicture/2.webp", alt: "client" },
  { src: "/clientPicture/3.webp", alt: "client" },
  { src: "/clientPicture/4.webp", alt: "client" },
];

// Star rating animation component
export const AnimatedStar = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
    >
      <Star className="w-5 h-5 text-white fill-white" />
    </motion.div>
  );
};

const TestimonialSection = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center gap-6  mt-2">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center mt-5">
            <div className="flex flex-col sm:flex-row items-center gap-4 px-4">
              <div className="flex -space-x-3">
                {clientPic.map((pic, i) => (
                  <div
                    key={i}
                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-purple-900"
                  >
                    <Image
                      src={pic.src}
                      alt={pic.alt}
                      className="rounded-full object-cover w-full h-full"
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, i) => (
                    <AnimatedStar key={i} delay={i * 0.1} />
                  ))}
                </div>
                <span className="text-sm sm:text-base text-white/80">
                  Trusted by 30+ businesses
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;
