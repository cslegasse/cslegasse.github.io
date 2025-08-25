"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import { TracingBeam } from "../../components/ui/tracing-beam";
import React, { useState } from "react";
import InteractiveLink from "../about/InteractiveLink";
import { ChevronDown, ChevronUp } from "lucide-react";
import InteractiveMap from "./Map";
import { Inter } from "next/font/google";

const experiences = [
  {
    country: "Japan",
    city: "Kyoto",
    image: "abroad/kyoto_default.jpg",
    title: "Study Abroad Semester",
    description:
      "Spent a semester at Kyoto University, learned Japanese, joined a soccer team, attended cultural events and made international friends.",
    tags: ["Study Abroad", "Japan", "Asia"],
  },
  {
    country: "Ecuador",
    city: "Cuenca",
    image: "abroad/cuenca_default.jpg",
    title: "Cultural Study",
    description:
      "Spent 1 month living and working, hiking the Andes, and refining my Spanish.",
    tags: ["South America", "Culture", "Spanish"],
  },
  {
    country: "South Korea",
    city: "Seoul",
    image: "abroad/seoul_default.jpg",
    title: "Cultural Study",
    description:
      "Spent 2 weeks exploring social customs, learning Korean, and normal tourist things.",
    tags: ["Asia", "Culture", "Tourism"],
  },
  
];


const subItems = [
  {
  title: "MUL2010 - Experiencing Music",
  content:
  "Analyzes contemporary music genres from different eras through a global lense.",
  },
  {
  title: "ENY1001 - Bugs & People",
  content:
  "Explores the development and interactions of bugs throughout history in the world.",
  },
  {
  title: "JPN1130/JPN1131 - Beginning Japanese 1 & 2",
  content:
  "Kyoto University N5 qualifying course for learning kanji, speaking, reading, grammar, and writing.",
  },
  {
  title: "PSY4956 - Mental & Social Isolation in Japan",
  content:
  "Explores the social phenomenon and history of Hikikomori.",
  },
  {
  title: "PSY4956 - Physiological Neuroscience",
  content:
  "Discusses the fundamentals of neuroscience from a biological standpoint.",
  },
  {
  title: "CIS4956 - Information & Society",
  content:
  "Explores the social impact of information and technology on society.",
  },
  {
  title: "CAI4101 - Fundamentals of AI",
  content:
  "Introduces AI through applied machine learning techniques.",
  },
  {
  title: "PSY4956 - Health Psychology",
  content:
  "The principle concepts of health psychology and its research basis.",
  },
  {
  title: "PSY2012 - Psychology",
  content:
  "Introduces the study of psychology and its research basis.",
  },
];

export default function Abroad() {
  const [openMain, setOpenMain] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
              {/* Back Link */}
              <Link
                href="/"
                className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4"
              >
                <p>← BACK TO HOME</p>
              </Link>

              {/* Header Section */}
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p
                  className={
                    "w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3"
                  }
                >
                  INTERNATIONAL EXPERIENCES
                </p>
                <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">
                  perspective across borders.
                </h1>
                <p className="max-w-2xl text-center text-base md:text-lg font-aeonik-thin tracking-regular leading-relaxed text-gray-600">
                  this page is a work in progress.
                </p>
              </div>

              {/* Experiences Grid */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 bg-white overflow-hidden"
                  >
                    {exp.image && (
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6 flex flex-col space-y-3">
                      <h2 className="font-aeonik-bold text-lg tracking-tight">{exp.title}</h2>
                      <p className="text-sm font-aeonik-thin text-gray-600">
                        {exp.city}, {exp.country}
                      </p>
                      <p className="text-base font-aeonik-thin leading-relaxed text-gray-700">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                
              </div> {/* <-- close grid here */}

             

                <div className="mt-10 w-full max-w-5xl mx-auto">
                {/* Map and descriptor side by side */}
                   <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">
                  around the globe.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Map */}
                  <div className="rounded-2xl shadow overflow-hidden">
                    {/* Replace with your actual map component */}
                    
                    <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                      <InteractiveMap/>
                    </div>
                  </div>

                  {/* Descriptor text box */}
                  <div className="rounded-2xl bg-white-100 shadow p-6">
                    <h2 className="text-xl font-aeonik-bold mb-2">About This Map</h2>
                    <p className="text-gray-700 font-aeonik-thin leading-relaxed">
                      This map highlights where international locations connected to my coursework, language study, and cultural exploration throughout the last 4 years.
                      I've been to 32 countries 15 US states while in college. Check out these cool destinations!
                    
                    </p>
                  </div>
                </div>

                {/* International Coursework Section - moved below map */}
                <div className="mt-10 w-full max-w-2xl mx-auto">
                  <button
                    onClick={() => setOpenMain(!openMain)}
                    className="flex w-full items-center justify-between rounded-2xl bg-black-100 px-5 py-3 font-aeonik-bold text-lg tracking-tight shadow-sm hover:bg-white-200 transition"
                  >
                    International Coursework
                    {openMain ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>

                  {openMain && (
                    <div className="mt-2 flex flex-col gap-2">
                      {subItems.map((item, idx) => (
                        <div key={idx} className="w-full">
                          <button
                            onClick={() => setOpenSub(openSub === idx ? null : idx)}
                            className="flex w-full items-center justify-between rounded-xl bg-gray px-4 py-2 font-aeonik-thin text-base shadow hover:bg-black-50 border"
                          >
                            {item.title}
                            {openSub === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>

                          {openSub === idx && (
                            <div className="px-6 py-3 text-sm text-gray-600 font-aeonik-thin leading-relaxed border-l-2 border-gray-300 bg-gray-50">
                              {item.content}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                </div>
            </div>
          </TracingBeam>
        </div>
      </div>
    </>
  );
}