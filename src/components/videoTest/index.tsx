"use Client ";
import React from "react";
import { motion } from "framer-motion";

const successStories = [
  {
    videoSrc: "/video1.mp4",
    achievement: "From 0 to 7,7920+ Students in Just 3 Months",
    thumbnail: "/thumbnail1.webp",
  },
  {
    videoSrc: "/video2.mp4",
    achievement: "$1000/M WITHOUT SHOWING MY FACE",
    thumbnail: "/thumbnail2.webp",
  },
  {
    videoSrc: "/video3.mp4",
    achievement: "SET IT & FORGET IT",
    thumbnail: "/thumbnail3.webp",
  },
];

const Test = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter mt-24 mb-16">
          Recent Results We&apos;ve Gotten For Creators & Freelancers Just Like
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
  );
};

export default Test;
