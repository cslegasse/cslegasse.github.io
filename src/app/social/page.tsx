"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer2 from "../../components/Footer-2";
import Marquee from "react-fast-marquee";
import { CardSpotlight } from "../../components/ui/card-spotlight";
import { TracingBeam } from "../../components/ui/tracing-beam";

const Social = () => {
  const brandImages = [
    "dubbygg.png",
    "ryneai.webp"
  ];

  const stats = [
    "analytic_1.png",
    "analytic_2.png",
    "analytic_3.png",
    "prof_dashboard.png",
    // "video_1_analytics.png"
    // "avg_age_range.png",
    // "engagement.png",
  ]


  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  
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

              {}
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">
                  SOCIAL MEDIA
                </p>
                <p className="w-full md:w-2/3 font-voyager-thin tracking-tight text-center leading-[100%] text-[44px] md:text-[54px] mb-3">
                  ugc portfolio & interests
                </p>
              </div>

              {}
              <div className="flex flex-col w-full max-w-[600px] mx-auto mt-3 p-4 justify-center text-6xl font-bold gap-y-2">
                <div className="flex flex-row w-full space-x-1">
                  <div className="self-start mt-3">
                    <h1 className="tracking-tight font-voyager-thin text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
                  </div>
                  <div className="flex flex-col w-full align-center justify-center space-y-6 items-start">
                  <p className="w-full font-aeonik-regular leading-[1.5] text-[28px] md:text-[24px] lg:text-[24px]">
                      I create high quality content that authentically speaks to your brand's story and convert users. 

                    </p>
                  </div>
                </div>
              </div>


        {/* STATS SECTION */}
        <div className="w-full mt-16">
          {/* Title */}
          <p className="w-full font-aeonik-bold tracking-tight text-left leading-[100%] text-[21px] mb-4">
            ANALYTICS
          </p>

          {/* Description */}
          <p className="w-full font-aeonik-regular leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px] mb-8">
            Recent stats from my social media profiles
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full mb-8">            {stats.map((image, index) => (
            <div key={index} className="w-full h-[250px] bg-gray-300 rounded-lg overflow-hidden mb-4"> {/* Adjusted inner mb */}
                <img
                  src={`/stats/${image}`}
                  alt={`Stat ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {}
          <div className="w-full">
            <p className="w-full font-aeonik-bold tracking-tight text-left leading-[100%] text-[21px] mb-8">
              BRANDS I'VE WORKED WITH
                  </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full">
                  {brandImages.map((image, index) => (
                  <div key={index} className="w-full h-[250px] bg-gray-300 rounded-lg overflow-hidden mb-10"> {/* Adjusted inner mb */}
                      <img
                        src={`/ugc/${image}`}
                        alt={`Brand ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
        {}
        <div>
        <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[36px] mb-8">
    PORTFOLIO
  </p>          <div className="grid grid-cols-1 min-h-screen md:grid-cols-3 gap-x-8 gap-y-10 pt-10 w-full">
            {[
              { src: "https://www.instagram.com/p/DEaRLpAO-Ma/embed", title: "AI PARTNERSHIP" },
              { src: "https://www.instagram.com/p/DBmFg0yONq1/embed", title: "CODING" },
              { src: "https://www.instagram.com/p/DDXrUmWyE1G/embed", title: "STUDY METHODS" },
              { src: "https://www.instagram.com/p/C96Q26wAR1H/embed", title: "FITNESS" },
              { src: "https://www.instagram.com/p/DMImtVgTHM3/embed", title: "JAPAN LIFE" },
              { src: "https://www.instagram.com/p/DMSijmYsvlR/embed", title: "JAPAN LIFE" },
              { src: "https://www.instagram.com/p/C_qdNqwPiVy/embed", title: "TECH MEMES" },
              { src: "https://www.instagram.com/p/C_lXVarvdRA/embed", title: "TECH MEMES" },
              { src: "https://www.instagram.com/p/DAOfNGjuhtB/embed", title: "TECH" },
            ].map((video, index) => (
              <div key={index} className="w-full font-aeonik-regular space-y-6 leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px] items-center">
                <iframe
                  src={video.src}
                  className="w-full sm:w-[350px] h-[438px] rounded-lg shadow-md"
                  allowFullScreen
                />
                <p className="text-center font-aeonik-bold text-sm tracking-tight mt-3">
                  {video.title}
                </p>
              </div>
            ))}
       </div>
          </div>
            <div className="flex flex-col w-full max-w-[400px] mx-auto mt-0 md:mt-7 lg:pt-3 p-3 md:p-0 lg:p-0 justify-center text-6xl font-bold gap-y-2">
              <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full flex justify-center">
                      book a call with me.
                      <div
                        className="calendly-inline-widget"
                        data-url="https://calendly.com/legasse"
                        style={{ minWidth: "320px", height: "480px", marginRight: "-110px"}}
                      ></div>
                </div>
              </div>
            </div>

            {/* TIMELINE SECTION */}
            <div className="w-full mt-2">
            <p className="w-full font-aeonik-bold tracking-tight text-left leading-[100%] text-[21px] mb-4">
              TIMELINE
            </p>
            <p className="w-full font-aeonik-regular leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px] mb-4">
              Relatable content delivered to your audience.
            </p>

            {/* Timeline */}
            <div className="w-full flex flex-col space-y-144">
              {[
                { title: "Discussion", description: "Create ideas and logistics of media proposal." },
                { title: "Develop", description: "Editing, scripting, content creation, & draft feedback." },
                { title: "Delivery", description: "Revisions. Final content produced within 14 business days." },
              ].map((milestone, index) => (
                <CardSpotlight key={index} radius={200} color="#FFD700" className="w-full py-4 px-6 shadow-xl">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold text-center text-white">{milestone.title}</h2>
                    <p className="mt-2 text-center text-white opacity-80">
                      {milestone.description}
                    </p>
                  </div>
                </CardSpotlight>
              ))}
            </div>
          </div>
            {}
              <div className="w-full flex flex-row py-20 overflow-hidden">
                <Marquee gradient gradientColor="#000" gradientWidth={25} className="w-full" speed={85} autoFill loop={0}>
                  {["BRANDS", "EMAIL", "ME"].map((word, index) => (
                    <p key={index} className="font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">
                      {word}
                    </p>
                  ))}
                </Marquee>
              </div>
            </div>
            </TracingBeam>
          <Footer2>
        </Footer2>
      </div>
    </div>
  
    </>
  );
};

export default Social;
