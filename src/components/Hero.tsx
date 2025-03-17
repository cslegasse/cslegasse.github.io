"use client";

import React, { useEffect, FC, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import posthog from 'posthog-js';
import { CardSpotlight } from "@/src/components/ui/card-spotlight";
import Footer from './Footer';

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_API_KEY!, { api_host: 'https://us.i.posthog.com' });
}

const handleProjClick = (projectName: string, projectLink: string, eventType: string) => {
  if (typeof window !== "undefined") {
    posthog.capture(eventType, {
      name: projectName,
      url: projectLink
    });
  }
};

const handleProjButtomClick = () => {
  if (typeof window !== "undefined") {
    posthog.capture('viewProjectsClicked', {property: 'value'});
  }
};

const nowProjects = [
  { name: "by gen-z for the fashionable", link: "https://krop.store/" },
];

const prevProjects = [
  { 
    name: "krop fashion",
    role: "growth team",
    desc: "by gen-z for the fashionable. 0 -> 500k arr. 1M customers.", 
    link: "https://krop.store/",
  },
  { 
    name: "synapse x",
    role: "scripter",
    desc: "inject scripts in seconds. 0 -> 175k arr.", 
    link: "https://x.synapse.to/",
  },
 

];

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
    const videoElement = videoRef.current;

    const handleCanPlay = () => {
      if (videoElement) {
        videoElement.play().catch((error) => {
          console.warn('Video autoplay was prevented:', error);
        });
      }
    };

    if (videoElement) {
      videoElement.addEventListener('canplay', handleCanPlay);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', handleCanPlay);
      }
    };
  }, []);

  const blur = 5;
  const videoSource = "home/static.mp4";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  
  return (

    
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="z-[-1] w-full h-full bg-black flex items-center justify-center absolute top-0">
            {isMounted && (
              <video
                className="absolute top-0 left-0 w-full object-cover"
                style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
                autoPlay
                loop
                muted
                playsInline
                id="video-id"
                ref={videoRef}
              >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            )}
        </div>
        <div className="flex flex-col w-full max-w-[600px] mx-auto mt-14 md:mt-0 lg:pt-0 p-4 md:p-0 lg:p-0 justify-center text-6xl font-bold gap-y-8">
  <div className="flex flex-row w-full space-x-1 mt-24">
    <div className="self-start mt-3">
      <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
    </div>
    <div className="flex flex-col w-full align-center justify-center space-y-6 md:space-y-6 items-start">
      <div className="flex flex-row w-full mb-3 items-center">
        <h1 className="tracking-tight font-voyager-thin text-[38px] md:text-[32px] lg:text-[32px]">hi, i'm legasse.</h1>
      </div>
      <div className="w-full font-aeonik-regular space-y-6 leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px]">
        <p>i'm Legasse. a 20yo security engineer + content creator studying CS at the University of Florida. i am focused on entrepreneurship, research, and tech.</p>
        <p>i conduct research on AI and security at the University of Florida and Princeton University. </p>
        <p>i have experience in various forms of ecommerce dealing with marketing, sales, coding, and management. </p>
        <p>you can reach me via <Link className="italic border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://instagram.com/remonbiz">instagram</Link> or email <Link href="mailto:legasse@legasseremon.com" className="border-b italic hover:text-blue-500 transition-all duration-400 hover:border-blue-500">legasse@legasseremon.com</Link>.</p>
      </div>

      {/* {}
      <div className="w-full text-[20px] font-voyager-thin text-[#FFD700] py-6">
        <p></p>
      </div> */}

      <div className="w-full flex justify-center py-6">
        <p>book a call with me.</p>

            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/legasse"
              style={{ minWidth: "320px", height: "500px" }} 
            >
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-5">
            <h1 className="tracking-tight font-voyager-thin text-[21px]">projects</h1>
            <div className="flex flex-col pb-40 md:pb-20 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
            <div className="flex flex-row space-x-4 w-full">
                <CardSpotlight 
                  href="https://krop.store/"
                  className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black">
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="font-aeonik-medium text-[18px]">krop.store</p>
                    <Image
                      priority
                      src="/home/iconArrowUprightWhite.png"
                      height={100}
                      width={100}
                      alt="White arrow icon"
                      className={`w-3 h-3 transition-opacity duration-200
                        opacity-100
                      }`}
                    />
                  </div>
                  <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                    fashion made by gen-z, for gen-z. custom fashion products from around the world. 1M happy customers.
                    <br/><br/>
                    featured on TikTok.
                  </p>
                </CardSpotlight>
                <CardSpotlight 
                  href="https://x.synapse.to"
                  className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black">
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="font-aeonik-medium text-[18px]">synapse x</p>
                    <Image
                      priority
                      src="/home/iconArrowUprightWhite.png"
                      height={100}
                      width={100}
                      alt="White arrow icon"
                      className={`w-3 h-3 transition-opacity duration-200
                        opacity-100
                      }`}
                    />
                  </div>
                  <p className="opacity-70 font-aeonik-regular text-[14px] leading-[130%]">
                        2-step injection method to hack your favorite games with custom scripts. 34,000 happy hackers.
                    <br/><br/>
                    featured on V3rmillion, SlurpTech.
                  </p>
                </CardSpotlight>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full space-y-3 px-5">
            {/* <p className="font-aeonik-regular text-[21px] md:text-[18px] lg:text-[18px]">previously, I've design + build products:</p> */}
            <div className="flex flex-col space-y-20">
              {prevProjects.map((project, index) => (
                <div key={index} className='flex flex-col space-y-6'>
                  <div key={index} className='flex flex-col space-y-2'>
                    <Link 
                      key={index} 
                      href={project.link || '#'} 
                      onClick={() => project.link && handleProjClick(project.name, project.link, 'prevProjectsClicked')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-row space-x-1 group"
                      onMouseEnter={() => setHoveredProject(project.name)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <p className="font-aeonik-bold text-[18px] group-hover:text-blue-600 transition duration-200 ease-in-out">
                        {project.name}
                      </p>
                      <div className="relative w-2 h-2 mt-1">
                        <Image
                          priority
                          src="/home/iconArrowUprightWhite.png"
                          height={100}
                          width={100}
                          alt="White arrow icon"
                          className={`absolute top-0 left-0 transition-opacity duration-200 ${
                            hoveredProject === project.name ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        <Image
                          priority
                          src="/home/iconArrowUprightBlue.png"
                          height={100}
                          width={100}
                          alt="Blue arrow icon"
                          className={`absolute top-0 left-0 transition-opacity duration-200 ${
                            hoveredProject === project.name ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>
                    </Link>
                    {/* <p className="opacity-70 font-aeonik-thin text-[18px]">{project.role}</p> */}
                  </div>
                  <p className="opacity-90 font-aeonik-regular text-[18px] leading-[140%]">{project.desc}</p>
                </div>

              ))}
            </div>

          </div>
    
          <div className="flex flex-col space-y-4 px-5">
            <h1 className="tracking-tight font-voyager-thin text-[21px]">see more</h1>
            <div className="flex flex-col pb-20 md:pb-0 pt-6 md:pt-0 lg:pt-0 sm:flex-row w-full space-y-3 md:space-y-0 md:space-x-4">
              <HoverBorderGradient
                containerClassName="rounded-xl w-full text-center md:text-left sm:w-auto"
                link="/projects"
                as="button"
                className="dark:bg-white bg-black text-white dark:text-black flex items-center space-x-2"
                onClick={() => handleProjButtomClick()}
              >
                <p className="font-graebenbach-mono-regular">VIEW PROJECTS</p>
              </HoverBorderGradient>
              {/* <Button text="VIEW PROJECTS" link="/projects" className="w-full text-center md:text-left sm:w-auto"></Button> */}
              <Button 
                text="ABOUT ME"
                link="/about"
                className="w-full text-center md:text-left sm:w-auto"
                event={`'aboutClicked', {property: 'value'}`}
              ></Button>
              <Button 
                text="SOCIAL MEDIA"
                link="/social"
                className="w-full text-center md:text-left sm:w-auto"
                event={`'aboutClicked', {property: 'value'}`}
              ></Button>
            </div>
          </div>
        </div>
        <Footer>
        </Footer>
      </main>
    </>
  );
};
export default Hero;