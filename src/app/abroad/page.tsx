"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { TracingBeam } from "@components/ui/tracing-beam";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import experiencesData from "@data/experiences.json";
import subItemsData from "@data/subitems.json";
import Globe, { type Marker } from "@components/Globe";
import Image from "next/image"

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: true });
const CoolMarquee = dynamic(() => import("@components/CoolMarquee"), { ssr: true });
const Footer = dynamic(() => import("@components/Footer"), {ssr: false,});

import { Lessons } from "@components/Lessons";

const SectionHeader = dynamic(() => import("@components/SectionHeader"), { ssr: true });



const experiences = experiencesData;
const subItems = subItemsData;

type CsvRow = {
  country: string;
  city: string;
  lat: string;
  lng: string;
  date: string;
};

export default function Abroad() {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [openMain, setOpenMain] = useState(false);
  const [openSub, setOpenSub] = useState<number | null>(null);

  

  useEffect(() => {
    import("papaparse").then(({ default: Papa }) => {

    Papa.parse<CsvRow>("/data/travel-data.csv", {
      download: true,
      header: true,
      complete: (results) => {
        const formatted: Marker[] = results.data
          .filter((row) => row.lat && row.lng)
          .map((row) => ({
            location: [parseFloat(row.lat), parseFloat(row.lng)],
            size: 0.05,
            type: "cone",
            height: 0.2,
            data: {
              country: row.country,
              city: row.city,
              date: row.date,
            },
          }));
        setMarkers(formatted);
        
      },
    });
    });
  }, []);

  return (
    
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
              <Link
                href="/"
                className="w-full font-body tracking-regular space-y-3 text-sm mb-4"
              >
                <p>← BACK TO HOME</p>
              </Link>

              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p
                  className={"w-full font-body tracking-tight text-center leading-[100%] text-[21px] mb-3"}
                >
                  INTERNATIONAL EXPERIENCES
                </p>
                <p className="max-w-2xl text-center text-base md:text-lg font-header tracking-regular leading-relaxed text-white">
                  places i've traveled to and what i've learned.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {experiences.map((exp, i) => (
                  <Link 
                    href={`/abroad/${exp.slug || exp.title.toLowerCase().replace(/\s+/g, '-')}`}
                    key={i}
                    className="group relative bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5"
                  >
                    <div className="relative h-56 overflow-hidden">
                      {exp.image && (
                        <>
                          <Image
                            src={exp.image}
                            alt={exp.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                          
                          <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Image
                              src="/home/iconArrowUprightWhite.png"
                              width={20}
                              height={20}
                              alt="Arrow"
                            />
                          </div>

                          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/70">
                              <circle cx="12" cy="12" r="10"/>
                              <polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span className="text-xs font-body text-white">{exp.duration || "2 weeks"}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="font-body text-xl text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>

                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                          </svg>
                          <span className="text-sm font-body text-white/80">
                            {exp.city}, {exp.country}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/60">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                          <span className="text-sm font-body text-white/80">
                            {exp.date || "Summer 2024"}
                          </span>
                        </div>
                      </div>

                 

                      <div className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-white group-hover:w-full transition-all duration-500" />
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)'
                      }}
                    />
                  </Link>
                ))}
              </div>

                <div className="mt-10 w-full max-w-5xl mx-auto">
              

                  <SectionHeader title="LESSONS ABROAD" />
                  <Lessons
                  sections={[
                    {
                      lessons: [
                        { title: "Collectivism", description: "Many socities emphasize group harmony parallel to individual expression. Adapting your behavior to navigate social expectations is present everywhere. Observing a subtle malance between contributing to a group and maintaining personal boundaries is necessary.", icon: "lightbulb" },
                        { title: "Social Intelligence", description: "Social communication in Asian cultures often relies on your abilitiy to 空気を読む or 'read the air'. Discomfort is often never expressed directly. You must be patient and respect boundaries without explicit instructions, unlike in the US where direct communication is common. Misleading cues must be avoided, so attention to detail is a life skill.", icon: "check" },
                        { title: "Independence", description: "Navigate your daily life in the most simple way possible. Being self-sufficient in foreign cities and taking risks to go on adventures is fostered maturity beyond age. However, comfort with loneliness and self-relience develops from homesickness.", icon: "star" },
                        { title: "Friendships", description: "Don't lose contact with your study abroad friends. Having an understanding for others customs and appreciating different social norms and activities helped me relate to things which are universally appealing. Joining a club and forcing yourself to be an extrovert will make amazing memories.", icon: "lightbulb" },
                      ],
                    }
                  ]}
                />

                <div className="mt-10 w-full max-w-2xl mx-auto overflow-visible">
                  <button
                    onClick={() => setOpenMain(!openMain)}
                    className="flex w-full items-center justify-between rounded-2xl bg-black-100 px-5 py-3 font-body text-lg tracking-tight shadow-sm hover:bg-white-200 transition"
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
                            className="flex w-full items-center justify-between rounded-xl bg-gray px-4 py-2 font-body text-base shadow hover:bg-black-50 border"
                          >
                            {item.title}
                            {openSub === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>

                          {openSub === idx && (
                            <div className="px-6 py-3 text-sm text-gray-600 font-body leading-relaxed border-l-2 border-gray-300 bg-gray-50">
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
          <CoolMarquee/>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}