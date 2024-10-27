"use client";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    question: "What is the goal of the Course Creation Consultation Program?",
    answer:
      "The goal is to help you create a course optimized for profitability, launch it across multiple online course marketplaces, and maximize visibility through search engine optimization. We guide you to scale your courses in these marketplaces and, if desired, host them on your website.",
  },
  {
    question: "Do I need prior experience, a following, or funds for ads?",
    answer:
      "No experience, following, or ad investment is needed! We use organic strategies to help you achieve results.",
  },
  {
    question: "How is the program structured?",
    answer:
      "The program includes three weekly coaching calls, 24/7 private messaging, and optional support from our in-house team for editing, design, and SEO.",
  },
  {
    question: "What results can I expect from this program?",
    answer:
      "Most clients generate sales within the first days on marketplaces, thanks to our optimized approach. We help you maximize reach and long-term profits.",
  },
  {
    question: "Can you help with niche selection and course content?",
    answer:
      "Absolutely. We assist with niche identification, target audience development, and course structuring to align with audience needs and boost enrollments.",
  },
  {
    question: "Will I learn how to market my course without paid ads?",
    answer:
      "Yes, organic marketing is central to our program. We focus on marketplace traffic and growth techniques, making paid advertising unnecessary.",
  },
  {
    question:
      "What if I need additional help with video production or editing?",
    answer:
      "Our program includes optional support from our team for video editing, thumbnail design, and SEO, ensuring your content is polished and professional.",
  },
  {
    question: "How soon can I start seeing results?",
    answer:
      "Results vary, but most clients begin seeing enrollments within a few days of uploading, utilizing marketplace optimization and our community-driven strategies.",
  },
  {
    question:
      "How is this program different from other course creation services?",
    answer:
      "Our approach focuses on organic growth, marketplace automation, and a personalized coaching model, making it accessible for creators at all levels—even with zero followers.",
  },
];

const AccordionItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-white/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center ">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <Minus /> : <Plus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5d2ca8] to-black py-[72px] px-4 sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Frequently asked questions
        </h2>
        <div className="mt-12 max-w-5xl mx-auto">
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
