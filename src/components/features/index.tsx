import React from "react";
import Feature from "./feature";

const features = [
  {
    title: "Course Creation",
    description:
      "How to build a course that will make your students stick around for the long term, by doing less & having more fun. This will allow you to scale and create even more",
  },
  {
    title: "Marketplace Sales Automation",
    description:
      "How To Automate Enrollments by Leveraging Search Results of Online Course Marketplaces... Using A Little-Known Secret Absolutely No One But Our Clients Have Their Hands on",
  },
  {
    title: "Our 0 ads 0 followers Framework",
    description:
      "How To Create A Plug and Play Sales System That Helps you Skyrocket Your Course Enrollments. This system has personally helped us close over 260+ clients in less than 2 years.",
  },
];

const Features = () => {
  return (
    <div className="bg-black text-white px-2 py-8 sm:py-24">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-center text-4xl sm:text-6xl font-bold tracking-tighter">
          What You Will Learn On Your Free Discovery Call
        </h2>

        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
