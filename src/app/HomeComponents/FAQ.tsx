"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you work with SaaS or service businesses?",
      answer:
        "Both. I specialize in SaaS products (like Blainy - ~85K users) and service businesses (like Everdry Waterproofing). Same growth principles. Different execution.",
    },
    {
      question: "How fast can I see results?",
      answer:
        "Reddit and social can generate leads in 30 days. SEO takes 60-90 days for momentum. I focus on sustainable growth, not quick hacks that die.",
    },
    {
      question: "Can you replicate the ~85K users result?",
      answer:
        "Every business is different. But I use the same systems: multi-channel SEO, Reddit marketing, social media, email campaigns. The framework scales.",
    },
    {
      question: "What makes Reddit marketing work?",
      answer:
        "Authenticity. I don't spam. I build community trust. Value-first content. Non-promotional engagement. That's why I've generated thousands of users with $0 ad spend.",
    },
    {
      question: "Do you handle paid ads too?",
      answer:
        "Yes. Meta Ads, Google Ads, retargeting. But my strength is organic growth. Lower CAC. Better retention. Sustainable over time.",
    },
    {
      question: "What's your pricing?",
      answer:
        "Depends on scope. SaaS projects differ from service businesses. Book a free call and I'll create a custom proposal.",
    },
    {
      question: "Can you work remotely?",
      answer:
        "Absolutely. I've worked with clients across US, Europe, Asia. Remote is my default.",
    },
    {
      question: "What if I need just SEO or just Reddit?",
      answer:
        "No problem. I offer individual services or full-stack growth. We'll figure out what you need.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Questions?{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Here Are Quick Answers.
            </span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-[#F8F6F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 flex items-center justify-between gap-4 text-left group"
              >
                <div className="flex items-start gap-4 flex-1">
                  {/* Q Number */}
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold flex items-center justify-center text-sm">
                    Q{index + 1}
                  </span>

                  {/* Question Text */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors pt-1">
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 pl-20">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Still have questions? Let's talk.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Book a Free Call
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
