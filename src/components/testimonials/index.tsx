"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

export const testimonials = [
  {
    text: "I went from 0 to 5,000+ students in just 2 months using their marketplace optimization strategy. The course creation framework is pure gold!",
    imageSrc: "/avatar-1.png",
    name: "Sarah J.",
    username: "Fitness Coach",
  },
  {
    text: "Their system helped me create and launch my first course without any following. Now I&apos;m making $2,000/month passive income while I sleep.",
    imageSrc: "/avatar-2.png",
    name: "Michael T.",
    username: "Digital Artist",
  },
  {
    text: "The marketplace strategy they taught me changed everything. My photography course went from 0 to 3,000 students without spending a dime on ads.",
    imageSrc: "/avatar-3.png",
    name: "Morgan Lee",
    username: "Photography Instructor",
  },
  {
    text: "I was skeptical about creating courses without a following, but their framework proved me wrong. Hit $5K in my first month on Udemy!",
    imageSrc: "/avatar-4.png",
    name: "David C.",
    username: "Business Coach",
  },
  {
    text: "Their 1-on-1 coaching helped me optimize my course for marketplace success. I&apos;ve gained over 2,000 students in just 6 weeks.",
    imageSrc: "/avatar-5.png",
    name: "Emma R.",
    username: "Language Teacher",
  },
  {
    text: "The course creation framework is brilliant. I created my tech course in 2 weeks and started getting enrollments immediately.",
    imageSrc: "/avatar-6.png",
    name: "Robert F.",
    username: "Tech Instructor",
  },
  {
    text: "Their system for scaling courses across multiple marketplaces is genius. I&apos;m now making consistent $3K/month without ads.",
    imageSrc: "/avatar-7.png",
    name: "Mario M.",
    username: "Digital Creator",
  },
  {
    text: "The step-by-step framework made course creation so simple. Launched my first course in 30 days and already have 1,000+ students!",
    imageSrc: "/avatar-8.png",
    name: "Emily D",
    username: "Freelance Designer",
  },
  {
    text: "From zero following to 4,000 students in 3 months. Their marketplace optimization strategies are worth every penny.",
    imageSrc: "/avatar-9.png",
    name: "Hassan H.",
    username: "Marketing Expert",
  },
];
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  clasName?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.clasName}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(
              ({ text, imageSrc, name, username }, idx) => (
                <div
                  className="p-8 rounded-3xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] max-w-xs w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]"
                  key={`${index}-${idx}`}
                >
                  <p className="text-gray-200 leading-relaxed">{text}</p>
                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      src={imageSrc}
                      width={44}
                      height={44}
                      alt={name}
                      className="h-11 w-11 rounded-full ring-2 ring-purple-400/20"
                    />
                    <div className="flex flex-col">
                      <div className="font-semibold text-white tracking-tight leading-snug">
                        {name}
                      </div>
                      <div className="text-purple-200/80 text-sm leading-snug tracking-tight">
                        {username}
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="relative bg-gradient-to-b from-black to-[#5d2ca8] py-[72px] sm:py-24 px-4 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(93,44,168,0.1),transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex justify-center mb-6">
          <div className="text-sm font-medium bg-purple-500/10 text-purple-200 px-4 py-1.5 rounded-lg border border-purple-500/20">
            Testimonials
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-center text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ain&apos;t Convinced Yet? <br />
            Here&apos;s More Of Our Clients
          </h2>
          <p className="text-center text-xl leading-relaxed text-purple-100/90 tracking-tight">
            Form a learner to a creator
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[750px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            clasName="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            clasName="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
