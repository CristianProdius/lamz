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
                I&apos;m Lambros Lazopoulos, known as LAMZ, a successful course
                creator. I&apos;ve built an educational platform that helps
                people turn their expertise into profitable online teaching
                careers. With over 25,000 students, I&apos;ve established myself
                as an authority in making teaching a viable side hustle through
                my Course Creation Academy.
              </p>

              <p className="text-gray-300">
                Through my academy, I offer intensive support with weekly
                one-on-one coaching calls and a vibrant course creation
                community. My business transformed when I moved from Skillshare
                to my own platform, using strategies like email marketing
                automation, high-converting funnels, and a strong social media
                presence on YouTube and TikTok. My expertise in course creation
                and business development has made me a respected figure in
                online education.
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
