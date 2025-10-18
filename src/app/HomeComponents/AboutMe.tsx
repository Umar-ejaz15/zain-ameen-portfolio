"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutMe() {
  const certifications = [
    "Growth Marketing",
    "Marketing Analytics",
    "GTM Strategy",
    "SEO",
    "Social Media Marketing",
  ];

  const experiences = [
    "Product Growth Specialist at Amoxt Solutions (Blainy)",
    "Marketing Specialist at Everdry Waterproofing",
    "Former Lead Gen Specialist (7,331 organic users for Hify)",
    "Computer Science student at Virtual University",
    "6+ years scaling businesses through organic marketing",
  ];

  return (
    <section className="bg-white py-20 px-4 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            I'm Zain.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              I Build Growth Systems That Scale.
            </span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 w-full"
          >
            <div className="sticky top-24">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-100 to-purple-100 aspect-square">
                <img
                  src="/zain.jpg"
                  alt="Zain - Growth Marketing Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-[#F8F6F4] rounded-2xl p-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">6+</p>
                  <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                </div>
                <div className="bg-[#F8F6F4] rounded-2xl p-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">85K+</p>
                  <p className="text-sm text-gray-600 mt-1">Users Generated</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5 w-full space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-2xl font-bold text-gray-900">
                I'm not your typical marketer.
              </p>
              <p className="text-2xl font-bold text-gray-900">
                I don't guess. I build systems.
              </p>
            </div>

            {/* What I've Done */}
            <div className="bg-[#E5DBEB] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                What I've Done:
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Scaled Blainy from zero to ~85,000 users in 12 months. All organic. 
                Generated ~30M search impressions. Delivered thousands of users through 
                Reddit—without ads.
              </p>
            </div>

            {/* Who I Work With */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                I work with two types of businesses:
              </h3>
              
              <div className="space-y-4">
                <div className="bg-[#F4F2EF] rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    SaaS Products:
                  </h4>
                  <p className="text-gray-800 leading-relaxed">
                    User acquisition. Multi-channel SEO. Reddit marketing. Social media 
                    growth. Email lifecycle campaigns. I build organic growth machines.
                  </p>
                </div>

                <div className="bg-[#DCE4EA] rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">
                    Service Businesses:
                  </h4>
                  <p className="text-gray-800 leading-relaxed">
                    Local SEO. Lead generation. Google Business optimization. Review 
                    campaigns. I help you dominate your local market.
                  </p>
                </div>
              </div>
            </div>

            {/* My Approach */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border-l-4 border-indigo-600">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                My Approach:
              </h3>
              <p className="text-gray-800 leading-relaxed mb-3">
                Growth isn't about tactics. It's about systems.
              </p>
              <p className="text-gray-800 leading-relaxed">
                I blend data with creativity. Strategy with execution. I'm as comfortable 
                building GTM plans as I am executing scrappy Reddit campaigns.
              </p>
            </div>

            {/* Background */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Background:
              </h3>
              <ul className="space-y-3">
                {experiences.map((exp, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-indigo-600 font-bold mt-1">•</span>
                    <span className="text-gray-800">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Certifications:
              </h3>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={index}
                    className="bg-white border-2 border-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 hover:border-indigo-600 hover:text-indigo-600 transition-colors"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            {/* Beyond Marketing */}
            <div className="bg-[#FFE5E5] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Beyond Marketing:
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Google Local Guide. Anime enthusiast. Foodie. I believe curiosity 
                fuels creativity.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Let's Work Together
                <svg
                  className="w-6 h-6"
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
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}