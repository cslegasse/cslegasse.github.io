"use client";

import Link from "next/link";
import Navbar from "@components/Navbar";
import { TracingBeam } from "@components/ui/tracing-beam";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import experiencesData from "@data/experiences.json";
import subItemsData from "@data/subitems.json";
import Footer from "@components/Footer"
import Papa from "papaparse";
import Globe, { type Marker } from "@components/Globe";


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
                className="w-full font-voyager-thin tracking-regular space-y-3 text-sm mb-4"
              >
                <p>← BACK TO HOME</p>
              </Link>

              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p
                  className={"w-full font-voyager-thin tracking-tight text-center leading-[100%] text-[21px] mb-3"}
                >
                  INTERNATIONAL EXPERIENCES
                </p>
                <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3 text-white">
                  perspective across borders.
                </h1>
                <p className="max-w-2xl text-center text-base md:text-lg font-voyager-thin tracking-regular leading-relaxed text-white">
                  places i've traveled to and what i've learned.
                </p>
              </div>

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
                      <h2 className="font-voyager-thin text-lg tracking-tight text-gray-600">{exp.title}</h2>
                      <p className="text-sm font-voyager-thin text-gray-600">
                        {exp.city}, {exp.country}
                      </p>
                      <p className="text-base font-voyager-thin leading-relaxed text-gray-700">
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
              </div>

                <div className="mt-10 w-full max-w-5xl mx-auto">
                   <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">
                  around the globe.
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="rounded-2xl shadow overflow-hidden">
                    
                    <div className="mt-6 flex justify-center">
                    <Globe
                      className="w-full h-full"
                      markerColor="#ff0000"
                      baseColor="#ffffff"
                      glowColor="#00aaff"
                      mapBrightness={12}
                      markers={markers}
                    />
                  </div>
                  </div>

                  <div className="rounded-2xl bg-white-100 shadow p-6">
                    <h2 className="text-xl font-voyager-thin mb-2">About This Map</h2>
                    <p className="text-white font-voyager-thin leading-relaxed">
                      This map highlights where international locations connected to my coursework, language study, and cultural exploration throughout the last 4 years.
                      I've been to 32 countries 15 US states while in college. Check out these cool destinations!
                    
                    </p>
                  </div>
                </div>

                <div className="mt-10 w-full max-w-2xl mx-auto overflow-visible">
                  <button
                    onClick={() => setOpenMain(!openMain)}
                    className="flex w-full items-center justify-between rounded-2xl bg-black-100 px-5 py-3 font-voyager-thin text-lg tracking-tight shadow-sm hover:bg-white-200 transition"
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
                            className="flex w-full items-center justify-between rounded-xl bg-gray px-4 py-2 font-voyager-thin text-base shadow hover:bg-black-50 border"
                          >
                            {item.title}
                            {openSub === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          </button>

                          {openSub === idx && (
                            <div className="px-6 py-3 text-sm text-gray-600 font-voyager-thin leading-relaxed border-l-2 border-gray-300 bg-gray-50">
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
                  <Footer></Footer>
      </div>
    </>
  );
}