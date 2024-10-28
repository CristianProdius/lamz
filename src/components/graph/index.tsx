"use client";
import { motion } from "framer-motion";

const OnlineEducationGraph = () => {
  const data = [
    { year: "2022", revenue: 217 },
    { year: "2023", revenue: 250 },
    { year: "2024", revenue: 300 },
    { year: "2025", revenue: 350 },
    { year: "2027", revenue: 400 },
    { year: "2030", revenue: 475 },
  ];

  return (
    <div className="bg-[#5d2ca8]">
      <div className="flex flex-col items-center mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center bg-white/10 rounded-lg px-4 py-1.5"
        >
          <span className="text-sm font-medium text-white ">
            HTe Online Educatioan
          </span>
        </motion.div>
      </div>
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter text-white mb-24">
        Here is what you get in the program
      </h2>
      <div className="max-w-5xl mx-auto p-6  bg-white backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-lg shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Online Education Market Revenue Worldwide
          </h2>
          <p className="text-sm text-gray-500">Revenue in billion US$</p>
        </div>
        <div className="relative h-96">
          {/* Y-axis */}
          <div className="absolute left-0 h-full w-12 flex flex-col justify-between text-sm text-gray-600">
            <span>500B</span>
            <span>400B</span>
            <span>300B</span>
            <span>200B</span>
            <span>100B</span>
            <span>0</span>
          </div>
          {/* Graph Area */}
          <div className="ml-12 h-full flex items-end">
            <div className="flex items-end justify-between w-full h-full">
              {data.map((item, index) => (
                <motion.div
                  key={item.year}
                  className="w-1/6 mx-1"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: `${(item.revenue / 500) * 100}%`,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="bg-blue-600 rounded-t-lg w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-xs text-white text-center pt-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {item.revenue}B
                    </motion.div>
                  </motion.div>
                  <div className="text-xs text-center mt-2">{item.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* Legend with animation */}
        <motion.div
          className="mt-8 text-sm text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
            <span>Revenue in billion US$</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OnlineEducationGraph;
