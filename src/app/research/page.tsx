//research page outline code

import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { TracingBeam } from "../../components/ui/tracing-beam";
import Footer2 from "../../components/Footer-2"
import Marquee from "react-fast-marquee";
import InteractiveLink from '../about/InteractiveLink';


const education = [
  {
    name: "B.S. Computer Science",
    desc: "University of Florida",
    year: "2022-2026",
  },
  {
    name: "Exchange Student",
    desc: "Kyoto University",
    year: "2025",
  },
]



export default function Research() {

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular text-sm mb-4">
                <p>← BACK TO HOME</p>
              </Link>

              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">
                  RESEARCH
                </p>
                <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">knowledge is power</h1>
              </div>

              {/* MAIN PROFILE SECTION */}
              <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Sidebar */}
                <aside className="md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
                    
                  <img
                    src="/about/me.JPEG"
                    alt="Profile"
                    className="rounded-full w-48 h-48 object-cover shadow-md mb-4"
                  />
                  <div className="space-y-2 text-sm text-slate-100">
                    <p>
                      <a href="lr0077@princeton.edu">legasseremon@ufl.edu</a>
                    </p>
                    <p>University of Florida</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4 mt-4 text-xl text-slate-100">
                    <a href="https://linkedin.com/legasse-remon/"><i className="fab fa-linkedin" /></a>
                    <a href="https://github.com/cslegasse/"><i className="fab fa-github" /></a>
                    {/* <a href="https://scholar.google.com/"><i className="ai ai-google-scholar" /></a> */}
                  </div>
                </aside>

                {/* Bio & Content */}
                <main className="md:col-span-2 space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Legasse Remon</h1>
                    <p className="text-lg text-slate-100 mb-4">
                    I am a 3rd year Computer Science undergraduate interested in cybersecurity and cognition. Specifically: social engineering and behavioral penetration testing.
                    I am a part of Ebner Lab at the <InteractiveLink href="https://ebnerlab.psych.ufl.edu/" event='ebner' underline={true} newTab={true}> University of Florida</InteractiveLink> and the Princeton Neuroscience Institute at <InteractiveLink href="https://ncclab.princeton.edu" event='ncc' underline={true} newTab={true}> Princeton University</InteractiveLink>.
                    </p>
                    <p className="text-slate-100 leading-relaxed text-[18px]">
                    </p>
                  </div>
                  {/* ✅ Education Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Education</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, idx) => (
                        <div key={idx} className="border border-slate-700 p-4 rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-white">{edu.name}</p>
                        <p className="text-slate-300 text-[15px]">{edu.desc}</p>
                        <p className="text-slate-500 text-sm">{edu.year}</p>
                        </div>
                    ))}
                    </div>
                </div>
  
           
        
                  <div>
                    <h2 className="text-4xl font-bold mb-2">Research Questions</h2>
                    <ul className="list-disc list-inside text-slate-100 text-[16px]">
                      <li>How can we detect the intent of social engineering attacks?</li>
                      <li>Can we model individual differences in decision-making to predict cognitive vulnerabilities?</li>
                      <li>What is the information-theoretic limit of detecting intent in ambiguous human communications?</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-2">News</h2>
                    <ul className="list-disc list-inside text-slate-100 text-[16px]">
                      <li>None...</li>
                    </ul>
                  </div>
                </main>
              </div>
            </div>
          </TracingBeam>
        </div>
      </div>
    </>
  );
  
}
