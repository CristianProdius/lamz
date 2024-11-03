"use client";

import { motion } from "framer-motion";
import React from "react";

export const testimonials = [
  {
    text: "I just launched my first course, and I got enrollments the same day! The production quality and support made everything feel seamless.",

    name: "Jessica Collins",
    username: "Course Creator",
  },
  {
    text: "Earning my first $500/month after only three months was a huge win. Couldn't have done it without the amazing guidance and free resources.",

    name: "Eric Johnson",
    username: "Online Instructor",
  },
  {
    text: "The best part? I didn't have to think about any marketing at all—the marketplace brought in students while I focused on content.",

    name: "Mark Sutherland",
    username: "Content Creator",
  },
  {
    text: "I'm thrilled with the outcome! The course tools were easy to use, and I saw my first $100 just weeks after launching.",

    name: "Pauline Meyer",
    username: "Course Instructor",
  },
  {
    text: "Getting enrollments immediately and seeing my course featured was beyond my expectations. Such an easy process with high-quality results.",

    name: "Tyler Brennan",
    username: "Digital Educator",
  },
  {
    text: "Surpassed $2,000 this month without lifting a finger for promotion. The marketplace setup really works!",

    name: "Clara Nguyen",
    username: "Online Teacher",
  },
  {
    text: "My Udemy course got enrollments right away, and I didn't even have to spend a dime on extra tools or software. So grateful for the help.",

    name: "Jared Lee",
    username: "Course Creator",
  },
  {
    text: "The video production quality is fantastic, and I already feel like I have a real strategy in place for my next course.",

    name: "Sophie Anderson",
    username: "Digital Instructor",
  },
  {
    text: "After three months, I'm consistently making $400/month. The structure and production support made it all possible!",

    name: "Mike Pereira",
    username: "Online Educator",
  },
  {
    text: "I wasn't expecting much at first, but my first course saw enrollments immediately. The guidance on setting everything up was exactly what I needed.",

    name: "Nicole Rivera",
    username: "Course Creator",
  },
  {
    text: "Managed to hit $1,000 a month with my course, and I didn't have to buy any extra software. Couldn't be happier with the result.",

    name: "Lucas Silva",
    username: "Digital Instructor",
  },
  {
    text: "Not having to worry about marketing or promotions is such a relief. The platform does all the work, and my courses are thriving.",

    name: "Emma Blake",
    username: "Online Teacher",
  },
  {
    text: "I'm new to online courses, but I got my first payment within days of uploading! The resources made the whole process stress-free.",

    name: "Liam Patel",
    username: "Course Creator",
  },
  {
    text: "I'm so glad I decided to go through with this course. My first Skillshare payout came quickly, and the production quality was excellent.",

    name: "Sara Hill",
    username: "Content Creator",
  },
  {
    text: "This month I hit $2,000, and I'm amazed at how easy it was to set up my course. Truly felt supported every step of the way.",

    name: "Ryan Brooks",
    username: "Online Instructor",
  },
  {
    text: "The course tools were free and easy to use. I've been earning over $100/month steadily, and the process couldn't have been smoother.",

    name: "Daniela Grant",
    username: "Digital Educator",
  },
  {
    text: "Got my first $85 within a few days of launching. The quality and support exceeded my expectations!",

    name: "Oliver Tan",
    username: "Course Creator",
  },
  {
    text: "Launching my course was a great experience. I saw enrollments immediately, and I'm starting to see real growth.",

    name: "Alex Park",
    username: "Online Educator",
  },
  {
    text: "The production quality alone has been a game-changer. I saw real results fast, and everything I needed was provided from the start.",

    name: "Megan Ford",
    username: "Digital Instructor",
  },
  {
    text: "It's incredible to have income coming in with no extra effort on my end. I just uploaded, and the enrollments kept coming.",

    name: "Carlos Ruiz",
    username: "Content Creator",
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
            {props.testimonials.map(({ text, name, username }, idx) => (
              <div
                className="p-8 rounded-3xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] max-w-xs w-full transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)]"
                key={`${index}-${idx}`}
              >
                <p className="text-gray-200 leading-relaxed">{text}</p>
                <div className="flex items-center gap-3 mt-6">
                  {/*<Image
                      src={imageSrc}
                      width={44}
                      height={44}
                      alt={name}
                      className="h-11 w-11 rounded-full ring-2 ring-purple-400/20"
                    /> */}
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
            ))}
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
