import React from "react";
import HeroComponents from "./HomeComponents/HeroComponents";
import HomeTools from "./HomeComponents/HomeTools";
import Projects from "./HomeComponents/Projects";
import Link from "next/link";
import WhatIDo from "./HomeComponents/WhatiDo";
import Services from "./HomeComponents/Services";
import Process from "./HomeComponents/Process";
import StatsAchievements from "./HomeComponents/StatsAchievements";
import Testimonials from "./HomeComponents/Testimonials";
import AboutMe from "./HomeComponents/AboutMe";
import ExpertiseSkills from "./HomeComponents/ExpertiseSkills";
import FAQ from "./HomeComponents/FAQ";
import CTAContact from "./HomeComponents/Contact";

export default function Home() {
  return (
    <div className="bg-[#ECEBE4] w-full min-h-screen p-20">
      <HeroComponents />
      <HomeTools />
      <WhatIDo />
      <Services />
      <Projects />
      <Link
        href="/projects"
        className=" w-fit mb-20 flex mx-auto justify-center items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
      >
        View All Case Studies
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
      </Link>
      <Process />
      <StatsAchievements />
      <Testimonials />
      <AboutMe />
      <ExpertiseSkills />
      <FAQ/>
      <CTAContact/>
    </div>
  );
}
