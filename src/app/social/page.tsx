import React from 'react';
import Link from 'next/link';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Marquee from "react-fast-marquee";
import { TracingBeam } from "../../components/ui/tracing-beam";

const Social = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4 ">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular text-sm mb-4">
                <p>← BACK TO HOME </p>
              </Link>
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">SOCIAL MEDIA</p>
                <p className="w-full md:w-2/3 font-voyager-thin tracking-tight text-center leading-[100%] text-[44px] md:text-[54px] mb-3">
                  A portfolio of my UGC videos and interests.
                </p>
              </div>
              
              {/* Grid layout for videos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 w-full">
                <div className="flex flex-col items-center">
                  <iframe 
                    src="https://www.instagram.com/p/DEaRLpAO-Ma/embed"
                    className="w-full sm:w-[350px] h-[438px]" 
                    allowFullScreen
                  />
                  <p className="text-start font-aeonik-bold text-sm tracking-tight mt-3">RYNE AI</p>
                </div>

                <div className="flex flex-col items-center">
                  <iframe 
                    src="https://www.instagram.com/p/DBmFg0yONq1/embed"
                    className="w-full sm:w-[350px] h-[438px]"
                    allowFullScreen
                  />
                  <p className="text-start font-aeonik-bold text-sm tracking-tight mt-3">CODING</p>
                </div>

                <div className="flex flex-col items-center">
                  <iframe 
                    src="https://www.instagram.com/p/DDXrUmWyE1G/embed"
                    className="w-full sm:w-[350px] h-[438px]" 
                    allowFullScreen
                  />
                  <p className="text-start font-aeonik-bold text-sm tracking-tight mt-3">STUDY METHODS</p>
                </div>
              </div>

              <div className="w-full flex flex-row py-20">
                <Marquee gradient gradientColor="#000" gradientWidth={25} className="h-[54px] w-full" speed={85} autoFill loop={0}>
                  <p className="w-full font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">BRANDS</p>
                  <p className="w-full font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">EMAIL</p>
                  <p className="w-full font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">ME</p>
                </Marquee>
              </div>
            </div>
          </TracingBeam>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Social;
