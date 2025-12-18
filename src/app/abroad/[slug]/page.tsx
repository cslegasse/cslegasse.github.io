"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic"
import { TracingBeam } from "@components/ui/tracing-beam";
import experiencesData from "@data/experiences.json";
import Navbar from "@components/Navbar";
import { MapPin, Calendar, Clock, BookOpen, Camera, Lightbulb, Heart } from "lucide-react";
import { CardSpotlight } from "@components/ui/card-spotlight";
import { useState, useEffect } from "react";

const CoolMarquee = dynamic(() => import("@components/CoolMarquee"), { ssr: true });
const Footer = dynamic(() => import("@components/Footer"), {ssr: false,});

export default function ExperienceDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const [activeTab, setActiveTab] = useState("story");

  
  const experience = experiencesData.find(
    exp => (exp.slug || exp.title.toLowerCase().replace(/\s+/g, '-')) === slug
  );

  if (!experience) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Navbar />
        <div className="text-center pt-32">
          <h1 className="text-4xl font-body text-white mb-4">Experience not found</h1>
          <Link href="/abroad" className="text-white/70 hover:text-white border-b border-white/30 hover:border-white transition-all font-body text-sm">
            ← back to experiences
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
        <Navbar />
        <div>
        <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
            <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
                <Link
                href="/abroad/"
                className="w-full font-body tracking-regular space-y-3 text-sm mb-4"
                >
                <p>← BACK TO EXPERIENCES</p>
                </Link>

                <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p
                    className={"w-full font-body tracking-tight text-center leading-[100%] text-[21px] mb-3"}
                >
                    INTERNATIONAL EXPERIENCES
                </p>
          
                </div>
                  
        
              <div className="relative w-full h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden mb-8 group">
                {experience.image && (
                  <>
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  </>
                )}
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-white/70 text-2xl mt-2">►</span>
                    <div>
                      <h1 className="font-body text-4xl md:text-6xl tracking-tight text-white mb-3">
                        {experience.title}
                      </h1>
                      <div className="flex flex-wrap items-center gap-4 text-white/80 font-body text-sm md:text-base">
                        <div className="flex items-center gap-2">
                          <MapPin size={18} />
                          <span>{experience.city}, {experience.country}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={18} />
                          <span>{experience.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={18} />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 md:gap-4 mb-8 overflow-x-auto pb-2">
                {[
                  { id: "story", label: "story", icon: BookOpen },
                  { id: "lessons", label: "lessons", icon: Lightbulb },
                  { id: "highlights", label: "highlights", icon: Heart },
                  { id: "gallery", label: "gallery", icon: Camera }
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-body text-sm transition-all whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-white text-black"
                          : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white border border-white/10"
                      }`}
                    >
                      <Icon size={16} />
                      <span className="uppercase tracking-wide">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {activeTab === "story" && (
                <div className="animate-fadeIn space-y-6">
                  <CardSpotlight className="bg-black border border-white/10 p-8 md:p-12 rounded-2xl">
                    <h2 className="font-body text-2xl md:text-3xl text-white mb-6 flex items-center gap-3">
                      <BookOpen className="text-white/70" />
                      <span>the journey</span>
                    </h2>
                    <p className="font-body text-lg text-white/80 leading-relaxed whitespace-pre-line">
                      {experience.essay}
                    </p>
                  </CardSpotlight>

                 
                </div>
              )}

              {activeTab === "lessons" && (
                <div className="animate-fadeIn space-y-4">
                  <h2 className="font-body text-2xl md:text-3xl text-white mb-6 flex items-center gap-3">
                    <Lightbulb className="text-white/70" />
                    <span>what i learned</span>
                  </h2>
                  {experience.learnings.map((learning, idx) => (
                    <CardSpotlight
                      key={idx}
                      className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-body text-white/30 group-hover:text-white/50 transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <p className="font-body text-lg text-white/80 group-hover:text-white transition-colors pt-1">
                          {learning}
                        </p>
                      </div>
                    </CardSpotlight>
                  ))}
                </div>
              )}

              {activeTab === "highlights" && (
                <div className="animate-fadeIn">
                  <h2 className="font-body text-2xl md:text-3xl text-white mb-6 flex items-center gap-3">
                    <Heart className="text-white/70" />
                    <span>memorable moments</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.highlights.map((highlight, idx) => (
                      <CardSpotlight
                        key={idx}
                        className="bg-black border border-white/10 p-6 rounded-xl hover:border-white/30 transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-white/50 group-hover:text-white transition-colors mt-1">►</span>
                          <p className="font-body text-white/80 group-hover:text-white transition-colors">
                            {highlight}
                          </p>
                        </div>
                      </CardSpotlight>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "gallery" && (
                <div className="animate-fadeIn">
                  <h2 className="font-body text-2xl md:text-3xl text-white mb-6 flex items-center gap-3">
                    <Camera className="text-white/70" />
                    <span>photo memories</span>
                  </h2>
                  
                  {experience.photos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {experience.photos.map((photo, idx) => (
                        <div
                          key={idx}
                          className="relative aspect-square rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all group"
                        >
                          <Image
                            src={photo.url}
                            alt={photo.caption || `Photo ${idx + 1}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {photo.caption && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                <p className="font-body text-sm text-white">
                                  {photo.caption}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <CardSpotlight className="bg-black border border-white/10 p-12 rounded-xl text-center">
                      <Camera size={48} className="mx-auto mb-4 text-white/30" />
                      <p className="font-body text-white/50">
                        Photo gallery coming soon
                      </p>
                    </CardSpotlight>
                  )}
                </div>
              )}
              
         </div>
         
          </TracingBeam>
          <Footer></Footer>

        </div>
      </div>
      </div>

    </>
    
  );
}