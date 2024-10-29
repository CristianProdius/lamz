import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const OnlineEducationGraph = () => {
  const data = [
    { year: "2022", revenue: 185.2 },
    { year: "2023", revenue: 205.4 },
    { year: "2024", revenue: 250.6 },
    { year: "2025", revenue: 290.8 },
    { year: "2027", revenue: 350.2 },
    { year: "2030", revenue: 475.0 },
  ];
  const maxRevenue = 500;

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="bg-[#5d2ca8] px-4">
      <div className="flex flex-col items-center mb-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          className="inline-flex items-center bg-white/10 rounded-lg px-4 py-1.5"
        >
          <span className="text-sm font-medium text-white">
            Online Education
          </span>
        </motion.div>
      </div>
      <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter text-white mb-12">
        The Future of Online Education
      </h2>
      <div
        ref={ref}
        className="max-w-5xl mx-auto p-6 bg-white/5 backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-lg shadow-lg"
      >
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">
            Online Education Market Revenue Worldwide
          </h2>
          <p className="text-sm text-gray-300">Revenue in billion US$</p>
        </div>
        <div className="relative h-96">
          {/* Y-axis */}
          <div className="absolute left-0 h-full w-12 flex flex-col justify-between text-sm text-gray-300">
            <span>500B</span>
            <span>400B</span>
            <span>300B</span>
            <span>200B</span>
            <span>100B</span>
            <span>0</span>
          </div>
          {/* Graph Area - SVG Line Chart */}
          <div className="relative ml-12 h-full w-[calc(100%-3rem)]">
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 4 }}
            >
              <defs>
                <linearGradient
                  id="lineGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#8BB4FF" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#8BB4FF" stopOpacity="0.1" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feFlood floodColor="#8BB4FF" floodOpacity="0.6" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              {/* Area under the line */}
              <motion.path
                d={`
                  M 0 ${100 - (data[0].revenue / maxRevenue) * 100}
                  ${data
                    .map((item, index) => {
                      const x = (index / (data.length - 1)) * 100;
                      const y = 100 - (item.revenue / maxRevenue) * 100;
                      return `L ${x} ${y}`;
                    })
                    .join(" ")}
                  L 100 100
                  L 0 100
                  Z
                `}
                fill="url(#lineGradient)"
                opacity="0.3"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 0.3 : 0 }}
                transition={{ duration: 1.5 }}
              />
              {/* Line */}
              <motion.path
                d={`
                  M 0 ${100 - (data[0].revenue / maxRevenue) * 100}
                  ${data
                    .map((item, index) => {
                      const x = (index / (data.length - 1)) * 100;
                      const y = 100 - (item.revenue / maxRevenue) * 100;
                      return `L ${x} ${y}`;
                    })
                    .join(" ")}
                `}
                fill="none"
                stroke="#8BB4FF"
                strokeWidth="1"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: inView ? 1 : 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Data points */}
              {data.map((item, index) => (
                <motion.circle
                  key={item.year}
                  cx={`${(index / (data.length - 1)) * 100}`}
                  cy={`${100 - (item.revenue / maxRevenue) * 100}`}
                  r="1"
                  fill="#8BB4FF"
                  style={{ filter: "none" }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: inView ? 1 : 0, scale: 1 }}
                  transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
                  whileHover={{
                    r: 2,
                    fill: "#A9C7FF",
                    transition: { duration: 0.2 },
                  }}
                >
                  <title>{`${item.year}: $${item.revenue}B`}</title>
                </motion.circle>
              ))}
            </motion.svg>
          </div>
          {/* X-axis labels */}
          <div className="absolute bottom-0 left-12 right-0 flex justify-between text-sm text-gray-300">
            {data.map((item) => (
              <span key={item.year}>{item.year}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineEducationGraph;
