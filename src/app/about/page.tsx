import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { TracingBeam } from "../../components/ui/tracing-beam";
import InteractiveLink from './InteractiveLink';

const awards = [
    {
        name: "Benjamin A Gilman Award",
        desc: "1 of 500 for $4,000 research funding abroad by US Department of State.",
        year: "2024",
    },
    {
      name: "Research Experience for Undergraduate (REU) Recipient",
      desc: "Awarded $15,000 in summer research funding by the National Science Foundation.",
      year: "2024",
    },
    {
      name: "Ronald E McNair Post-baccalaurete Achievement Award",
      desc: "Recognized for graduate studies and research efforts to support students.",
      year: "2024",
    },
    {
      name: "AI Across the Statewide Curriculum Award",
      desc: "AI research funding through UF-FAMU NSF Award #2123440.",
      year: "2023",
    },
    {
      name: "Cambridge International Merit Award",
      desc: "Recognized for perfect scores on Cambridge University entrance assessments.",
      year: "2022",
    },
    {
      name: "Sunshine Opportunity Scholar",
      desc: "1 of 10 for $25,000 scholarship for disadvantaged students in Florida.",
      year: "2022",
    },
    
];

const education = [
  {
    name: "BS Computer Science",
    desc: "University of Florida",
    year: "2022-2026",
  },
  {
    name: "Exchange Student",
    desc: "Kyoto University",
    year: "2025",
  },
]

const experiences = [
    {
        number: "01",
        position: "CYBERSECURITY INTERN",
        year: "2025",
        companyName: "NVIDIA",
        link: "https://nvidia.com/",
        imageName: "/projects/nvidia.jpg",
        roleDescription: "Soon."
    },
    {
        number: "02",
        position: "ML ENGINEER INTERN",
        year: "2024",
        companyName: "IBM",
        link: "https://www.ibm.com/",
        imageName: "/projects/ibm.jpg",
        roleDescription: "IBM Watson."
    },
    {
        number: "03",
        position: "AI RESEARCH INTERN",
        year: "2024",
        companyName: "Princeton University",
        link: "https://www.ai.princeton.edu/",
        imageName: "/projects/princetonu.png",
        roleDescription: "VLMs for cognitive control research."
    },
    {
        number: "04",
        position: "SECURITY ENGINEER INTERN",
        year: "2024",
        companyName: "Mastercard",
        link: "https://www.mastercard.com/",
        imageName: "/projects/mastercard.png",
        roleDescription: "Insider Threat and Intelligence."
    },
    {
      number: "05",
      position: "CYBERSECURITY INTERN",
      year: "2024",
      companyName: "Raymond James Financial",
      link: "https://www.raymondjames.com/",
      imageName: "/projects/raymondjames.png",
      roleDescription: "Intrusion Detection."
  },
];

const About = () => {
    const groupedExperiences = [];
    for (let i = 0; i < experiences.length; i += 2) {
      groupedExperiences.push(experiences.slice(i, i + 2));
    }
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 md:px-22 lg:px-20 items-start justify-center text-6xl font-bold gap-y-4 ">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
                <p>← BACK TO HOME </p>
              </Link>
              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
                <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">ABOUT </p>
                <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">I'm Legasse, a Cuban-American security engineer, researcher, and content creator.  I study CS @ University of Florida.</h1>
                <Image
                  priority
                  src="/about/me.JPEG"
                  height={600}
                  width={481}
                  alt="Descriptive Text"
                  className="py-10"
                />
                <div className="w-full md:w-2/3 font-aeonik-thin tracking-[0.015em] space-y-10 items-center align-center justify-center text-[21px] md:text-[21px]">
                  <p className="leading-[150%]">My journey in software and security started at age 14 utilizing a DLL injector <InteractiveLink href="https://x.synapse.to" event='synapse' underline={true} newTab={true}>Synapse X.</InteractiveLink> where I was a scripter. Synapse Softworks was later <InteractiveLink href="https://devforum.roblox.com/t/exploit-prevention-update/2663101" event='synapse' underline={true} newTab={true}> acquired by ROBLOX</InteractiveLink> for millions.
                  </p>
                  <p className="leading-[150%]">At 15, I became curious about computers and learned low-level programming languages, scripting, and Windows OS sys-internals. This hobby turned into a passion for SAAS development.
                  </p>
                  <p className="leading-[150%]">At 18, I started research in phishing and deepfake detection systems at the <InteractiveLink href="https://ebnerlab.psych.ufl.edu/" event='ebner' underline={true} newTab={true}> University of Florida</InteractiveLink>. Later, focusing on cognitive control and cybersecurity at <InteractiveLink href="https://ncclab.princeton.edu" event='ncc' underline={true} newTab={true}> Princeton University</InteractiveLink>. I've co-published papers and given some talks.
                  </p>
                  <p className="leading-[150%]">At 19, I worked on <InteractiveLink href="https:/krop.store/" event='krop' underline={true} newTab={true}> Krop Fashion</InteractiveLink>, a Gen-Z focused fashion store with over 1M customers; scaled the social media presence of <InteractiveLink href="https://cal.ai/" event='cal' underline={true} newTab={true}> Cal AI</InteractiveLink>, <InteractiveLink href="https:/krop.store/" event='krop' underline={true} newTab={true}> Ryne AI</InteractiveLink>, and <InteractiveLink href="https:/krop.store/" event='krop' underline={true} newTab={true}> Gelrova </InteractiveLink> to 100k+ followers; and created <InteractiveLink href="https:/krop.store/" event='krop' underline={true} newTab={true}> RemonBiz</InteractiveLink>, my personal brand providing tech and entrepreneurship insight.
                  </p>
                  <p className="leading-[150%]">I am a past board member of the <InteractiveLink href="https://www.shpeuf.com/" event='shpe' underline={true} newTab={true}> Society of Hispanic Professional Engineers</InteractiveLink> and the <InteractiveLink href="https://theleadershipalliance.org/" event='leadership' underline={true} newTab={true}> Leadership Alliance</InteractiveLink>.
                  </p>
                  <p className="leading-[150%]">Today, I design architecture for ecommerce businesses and brands to drive sales. I provide the expertise of a software engineer, researcher, and growth hacker. I create content for brands and sell digital products.
                  </p>
                  
                </div>
              </div>
            {}
            </div>
          <div className="flex flex-col w-full py-20">
            <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">EXPERIENCE</p>
            {groupedExperiences.map((group, index) => (
            <div key={index} className="flex flex-col md:flex-row w-full justify-between md:space-x-10 border-b pb-10 border-gray-800">
              {group.map((exp, idx) => (
                <div key={idx} className="w-full py-10 font-aeonik-regular">
                  <InteractiveLink 
                    href={exp.link as string}
                    event={'aboutExperienceClicked'}
                  >
                    <div className="flex flex-row items-start align-start ">
                      <div className="flex flex-col w-1/6">
                        <p className="text-sm pb-5 text-gray-500">{exp.number}</p>
                        <Image
                          priority
                          src={exp.imageName}
                          height={118}
                          width={118}
                          alt="Descriptive Text"
                        />
                      </div>
                      <div className="ml-10 w-9/12 items-start">
                        <p className="text-sm pb-5 text-gray-500">{exp.position}</p>
                        <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{exp.companyName}</p>
                        <p className="text-[18px] mt-4 leading-[150%] text-gray-400">{exp.roleDescription}</p>
                      </div>
                      <div className="flex flex-col w-1/12 items-end">
                        <p className="text-sm pb-5 text-gray-500">{exp.year}</p>
                      </div>
                    </div>
                  </InteractiveLink>
                </div>
              ))}
            </div>
            ))}
          </div>
          <div className="w-full py-20">
              <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">EDUCATION</p>
              {education.map((education) => (
                  <div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-gray-800 pt-10">
                      <div>
                          <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{education.name}</p>
                          <p className="font-aeonik-thin text-gray-400 tracking-tight text-[18px] md:text-[21px] mb-3">{education.desc}</p>
                      </div>
                      <p className="font-aeonik-thin tracking-tight text-[18px] md:text-[21px] mb-3">{education.year}</p>
                  </div>
              ))}
          </div>
          <div className="w-full py-20">
              <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">AWARDS</p>
              {awards.map((award) => (
                  <div className="flex flex-col md:flex-row justify-between md:items-end w-full border-b border-gray-800 pt-10">
                      <div>
                          <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{award.name}</p>
                          <p className="font-aeonik-thin text-gray-400 tracking-tight text-[18px] md:text-[21px] mb-3">{award.desc}</p>
                      </div>
                      <p className="font-aeonik-thin tracking-tight text-[18px] md:text-[21px] mb-3">{award.year}</p>
                  </div>
              ))}
          </div>
        </TracingBeam>
        </div>
      </div>
      <Footer/>
    </>
  );
};
export default About;