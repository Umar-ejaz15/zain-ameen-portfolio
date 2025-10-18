"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Phase {
  number: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export default function Process() {
  const [activePhase, setActivePhase] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const phaseRefs = useRef<(HTMLDivElement | null)[]>([]);

  const phases: Phase[] = [
    {
      number: "01",
      title: "Discover",
      description:
        "Deep dive into your business. Competitor analysis. Audience research. Opportunity mapping. Find what competitors miss.",
      image: "/images/discover.jpg",
      color: "#E5DBEB",
    },
    {
      number: "02",
      title: "Define",
      description:
        "Build your growth roadmap. GTM strategy. Messaging framework. Channel selection. 90-day action plan.",
      image: "/images/define.jpg",
      color: "#F4F2EF",
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Execute the plan. Content creation. SEO optimization. Community building. Campaign launches. Weekly optimization.",
      image: "/images/develop.jpg",
      color: "#DCE4EA",
    },
    {
      number: "04",
      title: "Deliver",
      description:
        "Track everything. Analyze data. Optimize what works. Scale winning channels. Report results monthly.",
      image: "/images/deliver.jpg",
      color: "#FFE5E5",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      phaseRefs.current.forEach((ref, index) => {
        if (ref) {
          const elementTop = ref.offsetTop;
          const elementBottom = elementTop + ref.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActivePhase(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            My 4-Phase System for
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Predictable Growth
            </span>
          </h2>
        </motion.div>

        {/* Process Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Side - Scrolling Content */}
          <div className="lg:w-1/2 space-y-32">
            {phases.map((phase, index) => (
              <div
                key={index}
                ref={(el) => (phaseRefs.current[index] = el)}
                className="min-h-[60vh] flex items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  {/* Phase Card */}
                  <div
                    className="rounded-3xl p-8 md:p-10 shadow-lg transition-all duration-500"
                    style={{
                      backgroundColor: phase.color,
                      transform: activePhase === index ? "scale(1.02)" : "scale(1)",
                      opacity: activePhase === index ? 1 : 0.6,
                    }}
                  >
                    {/* Phase Number */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-6xl font-bold text-gray-900/30">
                        {phase.number}
                      </span>
                      <div className="h-1 flex-1 bg-gray-900/20 rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-500"
                          style={{
                            width: activePhase === index ? "100%" : "0%",
                          }}
                        ></div>
                      </div>
                    </div>

                    {/* Phase Title */}
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Phase {index + 1}: {phase.title}
                    </h3>

                    {/* Phase Description */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right Side - Sticky Image */}
          <div className="lg:w-1/2 relative">
            <div className="sticky top-24 h-[70vh] hidden lg:block">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700"
                  style={{
                    opacity: activePhase === index ? 1 : 0,
                    transform: activePhase === index ? "scale(1)" : "scale(0.95)",
                    zIndex: activePhase === index ? 10 : 0,
                  }}
                >
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with Phase Number */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <span className="text-7xl font-bold opacity-80">
                        {phase.number}
                      </span>
                      <p className="text-2xl font-bold mt-2">{phase.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            No guesswork.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Just systems that scale.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
