"use client";
import React from "react";
import { motion } from "framer-motion";

export default function StatsAchievements() {
  const stats = [
    {
      number: "~85,000",
      label: "Users in 12 Months",
      sublabel: "(SaaS)",
      color: "#E5DBEB",
    },
    {
      number: "~20M+",
      label: "Search Impressions",
      sublabel: "Delivered",
      color: "#F4F2EF",
    },
    {
      number: "Thousands",
      label: "Reddit Users",
      sublabel: "Generated",
      color: "#DCE4EA",
    },
    {
      number: "831",
      label: "Reddit Conversions",
      sublabel: "(30 Days)",
      color: "#FFE5E5",
    },
    {
      number: "7,331",
      label: "Organic Users",
      sublabel: "(Hify)",
      color: "#E5DBEB",
    },
    {
      number: "~80K+",
      label: "YouTube Views",
      sublabel: "(30 Days)",
      color: "#F4F2EF",
    },
    {
      number: "~225K+",
      label: "Threads Impressions",
      sublabel: "",
      color: "#DCE4EA",
    },
    {
      number: "$0",
      label: "Spent on Ads",
      sublabel: "",
      color: "#FFE5E5",
    },
    {
      number: "100s",
      label: "Paying Customers",
      sublabel: "Acquired",
      color: "#E5DBEB",
    },
    {
      number: "6+",
      label: "Years Marketing",
      sublabel: "Experience",
      color: "#F4F2EF",
    },
  ];

  return (
    <section className="bg-[#F8F6F4] py-20 px-4 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Growth I've Delivered
          </h2>
          <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            (All Organic)
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-2xl p-6 md:p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 group"
              style={{ backgroundColor: stat.color }}
            >
              {/* Number */}
              <div className="mb-3">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 group-hover:scale-110 inline-block transition-transform duration-300">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <p className="text-sm md:text-base font-semibold text-gray-800 leading-tight">
                {stat.label}
              </p>

              {/* Sublabel */}
              {stat.sublabel && (
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  {stat.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white rounded-2xl px-8 py-4 shadow-lg">
            <p className="text-lg md:text-xl font-bold text-gray-900">
              Every number above?{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                100% Organic. $0 in ads.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}