"use client";

import Footer from "@/components/footer";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-gradient-to-b from-[#5d2ca8] via-[#3e1a84] to-black">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Let&apos;s Transform Your Knowledge Into A Course
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
              Schedule a free consultation to discuss your course creation
              journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
            <div className="bg-gray-800/50 p-10 rounded-2xl backdrop-blur-sm border border-gray-700/50 shadow-xl transform hover:scale-[1.02] transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Why Book A Call With Us?
              </h2>
              <ul className="space-y-6 text-gray-200">
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Get a personalized course creation strategy
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Learn our proven marketplace optimization framework
                  </span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg">
                    Discover how to launch without ads or following
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-2xl overflow-hidden backdrop-blur-sm border border-gray-700/50 shadow-xl h-[700px] transform hover:scale-[1.02] transition-all duration-300">
              <InlineWidget
                url="https://calendly.com/lamz/one-on-one-call"
                styles={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
