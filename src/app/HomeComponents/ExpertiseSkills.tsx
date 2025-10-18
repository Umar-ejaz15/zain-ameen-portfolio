"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ExpertiseSkills() {
  const skillCategories = [
    {
      title: "Growth Strategy",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      skills: [
        "Product Growth (SaaS)",
        "Service Business Marketing",
        "Go-to-Market Planning",
        "User Acquisition Systems",
        "Local SEO Strategy",
        "Campaign Management",
        "Competitive Positioning",
        "Lifecycle Marketing",
      ],
      color: "#E5DBEB",
    },
    {
      title: "Channels & Tactics",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      skills: [
        "Multi-Channel SEO (Google, Bing, Reddit, YouTube)",
        "Reddit Marketing (Non-Promotional)",
        "Social Media (LinkedIn, TikTok, Pinterest, Instagram, YouTube)",
        "Email Marketing & Automation",
        "Content Marketing",
        "Local Marketing & Lead Gen",
        "Influencer Partnerships",
        "Meta Ads & Retargeting",
      ],
      color: "#F4F2EF",
    },
    {
      title: "Tools & Platforms",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: [
        "Google Analytics 4",
        "Google Search Console",
        "Google Business Profile",
        "SEMrush & Ahrefs",
        "Reddit Analytics",
        "LinkedIn Marketing",
        "TikTok Analytics",
        "YouTube Studio",
        "Pinterest Business",
        "Email Automation",
      ],
      color: "#DCE4EA",
    },
  ];

  const certifications = [
    { name: "Growth Marketing", provider: "TestDome" },
    { name: "Marketing Analytics", provider: "TestDome" },
    { name: "Create a Go-to-Market Plan", provider: "LinkedIn" },
    { name: "Social Media Marketing", provider: "HubSpot" },
    { name: "SEMrush SEO Crash Course", provider: "Brian Dean" },
    { name: "Advanced Product Marketing", provider: "LinkedIn" },
    { name: "Product Marketing Foundations", provider: "LinkedIn" },
    { name: "Digital Marketing Foundations", provider: "LinkedIn" },
  ];

  return (
    <section className="bg-[#F8F6F4] py-20 px-4">
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
            Skills & Tools That
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Deliver Results
            </span>
          </h2>
        </motion.div>

        {/* Three-Column Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: category.color }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-gray-900">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-start gap-2">
                    <span className="text-indigo-600 font-bold mt-1 flex-shrink-0">
                      •
                    </span>
                    <span className="text-gray-800 text-sm leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Certifications
            </h3>
            <p className="text-lg text-gray-600">Certified By:</p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 group"
              >
                {/* Certificate Icon */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Certification Name */}
                <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">
                  {cert.name}
                </h4>

                {/* Provider */}
                <p className="text-xs text-gray-600 font-medium">
                  {cert.provider}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}