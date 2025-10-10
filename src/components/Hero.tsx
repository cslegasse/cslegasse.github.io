"use client";

import React, { useEffect, FC, useRef, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import posthog from 'posthog-js';
import CalEmbed from "@components/CalEmbed";
import { usePostHog } from 'posthog-js/react';

import { CardSpotlight } from "@components/ui/card-spotlight";
import Footer from './Footer';

const handleProjButtomClick = () => {
  if (typeof window !== "undefined") {
    posthog.capture('viewProjectsClicked', {property: 'value'});
  }
};

const handleProjClick = (projectName: string, projectLink: string) => {
  posthog?.capture('project_clicked', {
    name: projectName,
    url: projectLink,
  });
};

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const posthog = usePostHog();


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
  }, [posthog]);

  const blur = 5;
  const videoSource = "home/static.mp4";

  
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
        <p>21yo security engineer + content creator. i am focused on entrepreneurship, research, and tech.</p>
        <p>i have experience with various forms of ecommerce dealing with marketing, sales, coding, and management. </p>
        <p>i'm currently building consumer apps with AI.</p>
        <p>you can reach me via <Link className="italic border-b hover:text-blue-500 transition-all duration-400 hover:border-blue-500" href="https://instagram.com/remonbiz">instagram</Link> or email <Link href="mailto:null@legasseremon.com" className="border-b italic hover:text-blue-500 transition-all duration-400 hover:border-blue-500">null@legasseremon.com</Link>.</p>
      </div>
      </div>
      </div>
      <div>
              <div className="flex flex-col w-full max-w-6xl mx-auto mt-0 md:mt-7 lg:pt-3 p-3 md:p-0 lg:p-0 justify-center text-6xl font-bold gap-y-6">
                <div className="w-full flex flex-col items-center justify-center text-center">
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="text-6xl font-bold mb-6">book a call with me.</div>
                    
                  
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
              {}
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