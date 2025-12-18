"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { CardSpotlight } from "@components/ui/card-spotlight";
import { TracingBeam } from "@components/ui/tracing-beam";

const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });
const Stats = dynamic(() => import("@components/Stats"), { ssr: false });
const CoolMarquee = dynamic(() => import("@components/CoolMarquee"), { ssr: false });
const Brands = dynamic(() => import("@components/Brands"), { ssr: false });
const SectionHeader = dynamic(() => import("@components/SectionHeader"), { ssr: false });

const Social = () => {
  const statImages = [
    "analytic_1.png",
    "analytic_2.png",
    "analytic_3.png",
    "prof_dashboard.png",
  ];

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
              <Link href="/" className="w-full font-body tracking-regular text-sm mb-4">
                <p>← BACK TO HOME</p>
              </Link>

              {}
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-full font-body tracking-tight text-center leading-[100%] text-[21px] mb-3">
                  SOCIAL MEDIA
                </p>
                <p className="w-full md:w-2/3 font-body tracking-tight text-center leading-[100%] text-[44px] md:text-[54px] mb-3">
                  ugc portfolio
                </p>
              </div>

            
              <div className="flex flex-col w-full max-w-[600px] mx-auto mt-3 p-4 justify-center text-6xl font-bold gap-y-2">
                <div className="flex flex-row w-full space-x-1">
                  <div className="self-start mt-3">
                    <h1 className="tracking-tight font-body text-[16px] md:text-[14px] lg:text-[14px] mr-1">►</h1>
                  </div>
                  <div className="flex flex-col w-full align-center justify-center space-y-6 items-start">
                  <p className="w-full font-header leading-[1.5] text-[28px] md:text-[24px] lg:text-[24px]">
                      I create high quality content that authentically speaks to your brand's story and convert users.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full mt-8">
                <SectionHeader title="ANALYTICS" />
                <p className="font-body text-[18px] mb-8 text-gray-300">
                  Performance from the last 30 days
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full mb-8">
                  {statImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-[250px] bg-gray-300 rounded-lg overflow-hidden"
                    >
                      <img
                        src={`/stats/${image}`}
                        alt={`Stat ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <Stats
              stats={[
                { label: "Likes", value: "454K+" },
                { label: "Views", value: "17M+" },
                { label: "Attention Rate", value: "73%" },
                { label: "Avg. Engagement", value: "6.98%" },
              ]}
            />
                
 <div className="w-full relative py-8">
  <Brands brandImages={[ "kulikuli.jpg","zo.png","adidas.png","cluely.jpg","vibecodeapp.png","fig.avif","ohara.avif","smodin.png","pagepilot.svg", "dubbygg.png","ryneai.webp", "wander.webp", "uphead.avif"]} />

  <SectionHeader title="PORTFOLIO" />
  <div className="flex flex-col md:flex-row gap-8 mt-10 justify-center items-start md:items-stretch">
    {[ 

      {
        src: "https://www.instagram.com/p/DMImtVgTHM3/embed",
        title: "JAPAN LIFE",
        brand: "Adidas",
        stats: { views: "2.8M", likes: "244K" },
        feedback: "",
      },
      {
        src: "https://www.instagram.com/p/DDXrUmWyE1G/embed",
        title: "STUDY METHODS",
        brand: "Smodin",
        stats: { views: "2.4M", likes: "80K" },
        feedback: "",
      },
    ].map((video, index) => (
      <div
        key={index}
        className="flex-1 flex flex-col bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
      >
        <iframe
          src={video.src}
          className="w-full h-[400px] sm:h-[450px] rounded-t-xl"
          allowFullScreen
          loading="lazy"
        />
        <div className="p-4 flex flex-col gap-2">
          <h3 className="font-header text-xl">{video.title}</h3>
          <div className="flex items-center justify-between mt-1">
            <span className="font-body text-sm text-gray-300">{video.brand}</span>
            <span className="font-body text-sm text-gray-300">
              {video.stats.views} views • {video.stats.likes} likes
            </span>
          </div>
          <p className="font-body text-gray-200 mt-2 text-sm">{video.feedback}</p>
        </div>
      </div>
    ))}
  </div>
  </div>


            <div className="w-full mt-2">
            <SectionHeader title="TIMELINE" />

            <p className="w-full font-body leading-[1.5] text-[21px] md:text-[18px] lg:text-[18px] mb-4">
              Relatable content delivered to your audience.
            </p>

            <div className="w-full flex flex-col space-y-8">
              {[
                { title: "Discussion", description: "Create ideas and logistics of media proposal." },
                { title: "Develop", description: "Editing, scripting, content creation, & draft feedback." },
                { title: "Delivery", description: "Revisions. Final content produced within 14 business days." },
              ].map((milestone, index) => (
                <CardSpotlight key={index} radius={200} color="#FFD700" className="font-header w-full py-4 px-6 shadow-xl">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-header text-center text-white">{milestone.title}</h2>
                    <p className="mt-2 text-center text-white opacity-80">
                      {milestone.description}
                    </p>
                  </div>
                </CardSpotlight>
              ))}
            </div>
          </div>
            <CoolMarquee/>
            </div>
            </TracingBeam>
         <Footer/>
      </div>
    </div>
  
    </>
  );
};

export default Social;
