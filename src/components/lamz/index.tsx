"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamMember = () => {
  return (
    <section className="bg-black text-white bg-gradient-to-b from-[#5d2ca8] to-black py-[72px] px-4 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-flex items-center bg-white/10 rounded-lg px-4 py-1.5"
          >
            <span className="text-sm font-medium text-white ">who we are</span>
          </motion.div>
        </div>

        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter mb-16">
          Meet Your Operations Experts
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-white/10 text-xs font-semibold px-4 py-1.5 rounded-lg">
                  CEO
                </span>
              </div>

              <h3 className="text-2xl font-bold">Hi, I&apos;m Lamz</h3>

              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                cupiditate commodi magni nisi doloribus exercitationem dolor
                quas! Quisquam, porro fugit. Rem dolorem deserunt id
                voluptatibus ab cum libero similique veritatis?
              </p>

              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aspernatur sunt et quis ab quae reprehenderit velit vitae
                nesciunt porro explicabo ad corporis repellendus sapiente
                cupiditate perspiciatis, minus commodi laborum voluptates.
                <span className="font-semibold">
                  the go-to operations expert
                </span>
                .
              </p>
            </div>

            <div className="relative flex flex-end">
              <Image
                src="/lamz.jpg"
                alt="Team member portrait"
                className="w-full max-w-[300px] rounded-lg"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
