"use client";

import React, { useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { usePostHog } from 'posthog-js/react';
import { CardSpotlight } from "@components/ui/card-spotlight";
import dynamic from "next/dynamic";
import { Typewriter } from 'react-simple-typewriter';

const Button = dynamic(() => import("@components/Button"), { ssr: false });
const CalEmbed = dynamic(() => import("@components/CalEmbed"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-white/5 rounded-xl animate-pulse flex items-center justify-center">
      <p className="text-white/50 font-body">Loading calendar...</p>
    </div>
  )
});
const ParallaxArrow = dynamic(() => import("@components/ParallaxArrow"), { ssr: false });


const Hero = () => {
  const posthog = usePostHog();

  const capture = (event: string, props?: Record<string, any>) => {
  if (!posthog) return; posthog.capture(event, props);};

  const handleProjButtonClick = () => {capture('view_projects_clicked');};

  const handleProjClick = (projectName: string, projectLink: string) => {
    capture('project_clicked', {
      project_name: projectName,
      project_url: projectLink,
    });
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    if (posthog) posthog.capture('hero_viewed');
  }, 1500);
  
    return () => clearTimeout(timer);
  }, [posthog]);

return (
    <>
      <main className="flex min-h-screen w-full flex-col items-center justify-center py-8 md:py-12 lg:py-16">
      <div className="flex flex-col w-full max-w-[600px] mx-auto mt-14 md:mt-0 lg:pt-0 p-4 md:p-0 lg:p-0 justify-center text-6xl font-bold gap-y-8">
      <div className="flex flex-row w-full space-x-1 mt-24">
      <ParallaxArrow/>
      <div className="flex flex-col w-full align-center justify-center space-y-6 md:space-y-6 items-start">
    <div className="flex flex-row w-full mb-3 items-center overflow-hidden">
    <h1 className="tracking-tight font-voyager-thin text-[38px] md:text-[32px] lg:text-[32px] animate-slide-up">
      hi, i'm legasse, <Typewriter
        words={['security engineer.', 'content creator.', 'AI enthusiast.', 'entrepreneur.']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </h1>
          </div>
          <div className="w-full font-voyager-thin space-y-6 leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px]">
            <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>21yo kid who builds apps.</p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>i have experience with various forms of ecommerce dealing with marketing, sales, coding, and management.</p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>i'm currently mass building consumer apps with AI.</p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              you can reach me via <Link className="italic border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://instagram.com/remonbiz">instagram</Link> or email <Link href="mailto:null@legasseremon.com" className="border-b italic hover:text-blue-500 transition-all duration-400 hover:border-blue-500">null@legasseremon.com</Link>.
            </p>
          </div>
        </div>
        </div>
        <div>
      <div className="flex flex-col w-full max-w-6xl mx-auto mt-0 md:mt-7 lg:pt-3 p-3 md:p-0 lg:p-0 justify-center text-6xl font-bold gap-y-6">
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="font-body text-6xl font-header mb-6">book a call.</div>
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
              <CalEmbed/>
            </div>
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
                  onClick={() => handleProjClick('krop.store', 'https://krop.store/')}
                  className="flex-1 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black">
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="font-body text-[18px]">krop.store</p>
                    <Image
                      loading="lazy"
                      src="/home/iconArrowUprightWhite.png"
                      height={100}
                      width={100}
                      alt="White arrow icon"
                      className={`w-3 h-3 transition-opacity duration-200
                        opacity-100
                      }`}
                    />
                  </div>
                  <p className="opacity-70 font-header text-[14px] leading-[130%]">
                    fashion made by gen-z, for gen-z. custom fashion products from around the world. 1M+ happy customers.
                    <br/><br/>
                    featured on TikTok.
                  </p>
                </CardSpotlight>
                <CardSpotlight 
                  href="https://x.synapse.to"
                  onClick={() => handleProjClick('x.synapse.to', 'https://x.synapse.to')}
                  className="flex-1 opacity-80 hover:opacity-100 transition-all duration-400 rounded-xl border border-[#ffffff33] p-4 space-y-2 bg-black">
                  <div className="flex flex-row w-full justify-between items-center">
                    <p className="font-body text-[18px]">synapse x</p>
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
                  <p className="opacity-70 font-header text-[14px] leading-[130%]">
                        2-step injection method to hack your favorite games with custom scripts. 34,000 happy hackers.
                    <br/><br/>
                    featured on V3rmillion, SlurpTech.
                  </p>
                </CardSpotlight>
              </div>
            </div>
          </div>
       <div className="bg-transparent flex flex-col w-full bg-black px-5 py-2 gap-2">
        <h1 className="bg-transparent tracking-tight font-body text-[21px]">see more</h1>
        <div className="flex flex-col sm:flex-row w-full gap-2 md:gap-4">
          <HoverBorderGradient
            containerClassName="rounded-xl w-full text-center sm:w-auto"
            link="/projects"
            as="button"
            className="bg-black text-white flex items-center space-x-2"
            onClick={() => handleProjButtonClick()}
          >
            <p className="bg-transparent font-body">VIEW PROJECTS</p>
          </HoverBorderGradient>
          <Button text="ABOUT ME" link="/about" className="bg-transparent w-full font-body sm:w-auto text-center" event={`'aboutClicked', {property: 'value'}`} />
          <Button text="SOCIAL MEDIA" link="/social" className="bg-transparent w-full font-body sm:w-auto text-center" event={`'aboutClicked', {property: 'value'}`} />
        </div>
      </div>
      </div>
          <main className="flex flex-col w-full bg-black text-white">
        </main>
      </main>
    </>
  );
};

export default Hero;