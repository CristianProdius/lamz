"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Users,
  Puzzle,
  Brain,
  BarChart3,
  UserPlus,
  Clock,
  Globe,
  LineChart,
} from "lucide-react";

const successStories = [
  {
    videoSrc: "/video1.mp4",
    achievement: "From 0 to 7,7920+ Students in Just 3 Months",
    thumbnail: "/thumbnail1.png",
  },
  {
    videoSrc: "/video2.mp4",
    achievement: "$1000/M WITHOUT SHOWING MY FACE",
    thumbnail: "/thumbnail2.png",
  },
  {
    videoSrc: "/video3.mp4",
    achievement: "SET IT & FORGET IT",
    thumbnail: "/thumbnail3.png",
  },
];

const features = [
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Course Creation Framework",
    description:
      "Streamline your course creation process with our proven A-Class system.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Support Team",
    description:
      "We do course creation better than anyone else. You're in good hands.",
  },
  {
    icon: <Puzzle className="w-8 h-8" />,
    title: "Platform Integration",
    description:
      "Whatever platform you need connected, we'll configure and optimize it.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Marketing",
    description:
      "Intelligently nurture new students with automated email & social flows.",
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Sales System",
    description:
      "Close more students with your own streamlined enrollment workflow.",
  },
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Student Onboarding",
    description:
      "Frictionless onboarding that sets the tone for course success.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Progress Tracking",
    description: "Automated student dashboard that eliminates manual tracking.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Market Intelligence",
    description: "Automated updates on every metric in your course business.",
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Data-Driven Growth",
    description:
      "Access accurate data to make well-informed scaling decisions.",
  },
];

const SuccessSection = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-[#5d2ca8] to-black py-[72px] px-4 sm:py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 rounded-lg px-4 py-1.5 mb-8">
            <span className="text-sm font-medium">🎯 HOW WE OPERATE</span>
          </div>
          <h2 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter mb-4">
            You Could Call Our Formula An "Unfair Advantage"
          </h2>
          <p className="text-xl text-white/60">
            Or, You Can Claim This Unfair Advantage For Your Own Course
            Business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all"
            >
              <div className="w-12 h-12 bg-[#3e1a84] rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter mt-24 mb-16">
            Recent Results We've Gotten For Creators & Freelancers Just Like
            You:
          </h3>

          <div className="grid sm:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col gap-6"
              >
                <div className="aspect-video rounded-xl overflow-hidden bg-[#3b1c6a] shadow-lg">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    poster={story.thumbnail}
                  >
                    <source src={story.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <h4 className="text-md  text-center">{story.achievement}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessSection;