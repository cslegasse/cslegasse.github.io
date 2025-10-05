import React, { FC } from 'react';
import Image from "next/image";
import Link from 'next/link';
import Navbar from "../../components/Navbar"
import { TracingBeam } from "../../components/ui/tracing-beam";
import InteractiveLink from './InteractiveLink';
import Footer2 from '@/src/components/Footer-2';


// const education = [
//   {
//     name: "BS Computer Science",
//     desc: "University of Florida",
//     year: "2022-2026",
//   },
//   {
//     name: "Exchange Student",
//     desc: "Kyoto University",
//     year: "2025",
//   },
// ]


const programmes = [
    {
      number: "01",
      position: "GILMAN ALUMNI",
      year: "2025",
      companyName: "Gilman Scholarship",
      link: "https://www.gilmanscholarship.org/",
      imageName: "/projects/gilman.png",
      roleDescription: "US gov scholarship to study abroad."
    },
    {
      number: "02",
      position: "SERGE & EMERGE ALUMNI",
      year: "2024",
      companyName: "Stanford SERGE",
      link: "https://engineering.stanford.edu/SERGE",
      imageName: "/projects/stanford.png",
      roleDescription: "Graduate exposure program at Stanford."
    },
    {
      number: "03",
      position: "UBER UCP ALUMNI",
      year: "2024",
      companyName: "Uber UCP",
      link: "https://www.uber.com/",
      imageName: "/projects/uber.png",
      roleDescription: "A competitive Uber SWE prep program."
    },
    {
      number: "04",
      position: "MCNAIR SCHOLAR",
      year: "2024",
      companyName: "McNair Scholar",
      link: "https://mcnairscholars.com/about/",
      imageName: "/projects/mcnair.png",
      roleDescription: "PhD prep program."
    },
    {
      number: "05",
      position: "MLT SCHOLAR",
      year: "2024",
      companyName: "MLT Career Prep",
      link: "https://mlt.org/",
      imageName: "/projects/mlt.png",
      roleDescription: "Tech prep program."
    },
    {
      number: "06",
      position: "UF PROGRAM ALUMNI",
      year: "2022-2025",
      companyName: "ISP, REPU, & AI Scholar",
      link: "https://ai.ufl.edu/for-our-students/meet-scholars/",
      imageName: "/projects/uf.png",
      roleDescription: "International, AI, and research scholar programs."
    },
       {
      number: "07",
      position: "HSF SCHOLAR",
      year: "2022-2025",
      companyName: "Hispanic Scholarship Fund",
      link: "https://www.hsf.org/",
      imageName: "/projects/hsf.jpg",
      roleDescription: "Hispanics for higher education."
    }
];

const experiences = [
    {
      number: "01",
      position: "RESEARCH COLLABORATOR",
      year: "2025",
      companyName: "Harvard University",
      link: "https://www.harvard.edu/",
      imageName: "/projects/harvard.png",
      roleDescription: "AI cyberattack research."
    },
    {
        number: "02",
        position: "ML ENGINEER INTERN",
        year: "2025",
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
      year: "2023",
      companyName: "Raymond James Financial",
      link: "https://www.raymondjames.com/",
      imageName: "/projects/raymondjames.png",
      roleDescription: "Intrusion Detection."
  },
];

const leadership = [

    {
      number: "01",
      position: "BOOTCAMP DIRECTOR",
      year: "2025",
      companyName: "Society of Hispanic Prof. Eng.",
      link: "https://www.shpeuf.com/",
      imageName: "/projects/shpe.jpg",
      roleDescription: "Professionalism."
    },
    {
      number: "02",
      position: "GRADUATE COORDINATOR",
      year: "2024",
      companyName: "Society of Hispanic Prof. Eng.",
      link: "https://www.shpeuf.com/",
      imageName: "/projects/shpe.jpg",
      roleDescription: "Executive board."
    },
    {
      number: "03",
      position: "RED TEAM",
      year: "2023-2024",
      companyName: "UF Security Information Team",
      link: "https://www.ufsit.club/",
      imageName: "/projects/sit.webp",
      roleDescription: "Did some trolling."
    },
    {
      number: "04",
      position: "RESEARCH DIRECTOR",
      year: "2022-2023",
      companyName: "Society of Hispanic Prof. Eng.",
      link: "https://www.shpeuf.com/",
      imageName: "/projects/shpe.jpg",
      roleDescription: "Guided research."
    },
  

 
];

const About = () => {
    const groupedExperiences = [];
    for (let i = 0; i < experiences.length; i += 2) {
      groupedExperiences.push(experiences.slice(i, i + 2));
    }

    const leadershipExperiences = [];
    for (let i = 0; i < leadership.length; i += 2) {
      leadershipExperiences.push(leadership.slice(i, i + 2));
    }

    const  programExperiences = [];
    for (let i = 0; i < programmes.length; i+= 2){
      programExperiences.push(programmes.slice(i,i+2));
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
                <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">be yourself.</h1>
                <div className="w-full md:w-2/3 font-aeonik-thin tracking-[0.015em] space-y-10 items-center align-center justify-center text-[21px] md:text-[21px]">
                  <p className="leading-[150%]">My journey in software and security started at age 14 utilizing a DLL injector <InteractiveLink href="https://x.synapse.to" event='synapse' underline={true} newTab={true}>Synapse X.</InteractiveLink> where I was a scripter. Synapse Softworks was later <InteractiveLink href="https://devforum.roblox.com/t/exploit-prevention-update/2663101" event='synapse' underline={true} newTab={true}> acquired by ROBLOX</InteractiveLink> for millions.
                  </p>
                  <p className="leading-[150%]">At 15, I helped developed and release multiple hack clients and script hubs for Minecraft and ROBLOX on <InteractiveLink href="https://v3rmillion.net" event='verm' underline={true} newTab={true}> V3rmillion </InteractiveLink> (Wally Hub), <InteractiveLink href="https://wearedevs.net" event='wearedevs' underline={true} newTab={true}> WeAreDevs </InteractiveLink> (Shiba Hub), and <InteractiveLink href="https://builtbybit.com" event='mcmarket' underline={true} newTab={true}> MC-Market </InteractiveLink> (Incognito Client).</p>

                  <p className="leading-[150%]">At 18, I started research in phishing and deepfake detection systems at the <InteractiveLink href="https://ebnerlab.psych.ufl.edu/" event='ebner' underline={true} newTab={true}> University of Florida</InteractiveLink>. Later, focusing on AI and cybersecurity at <InteractiveLink href="https://ncclab.princeton.edu" event='ncc' underline={true} newTab={true}> Princeton University</InteractiveLink>.
                  </p>
                  <p className="leading-[150%]">At 19, I worked on <InteractiveLink href="https://krop.store/" event='krop' underline={true} newTab={true}> Krop Fashion</InteractiveLink>, a Gen-Z focused white-labeled fashion store with over 1M customers and created <InteractiveLink href="https://beacons.ai/legasse" event='beacons' underline={true} newTab={true}> RemonBiz</InteractiveLink>, my personal brand providing tech, entrepreneurship, travel, and lifestyle insight.
                  </p>
                  <p className="leading-[150%]">At 20, I created <InteractiveLink href="https://beacons.ai/legasse/" event='beacons_link' underline={true} newTab={true}> AI-generated/automated shorts </InteractiveLink> on <InteractiveLink href="https://youtube.com/" event='yt' underline={true} newTab={true}> Youtube </InteractiveLink> and <InteractiveLink href="https://tiktok.com/" event='tt' underline={true} newTab={true}> TikTok </InteractiveLink>, grossing 18k MRR across 25 channels and sold them to <InteractiveLink href="https://www.forbes.com/profile/pubity-group/" event='pubity' underline={true} newTab={true}> Pubity Group </InteractiveLink>. </p>
                
                  <p className="leading-[150%]">Today, I'm working on consumer tech apps.
                  </p>
          
                </div>
              </div>
            {}
            </div>
          <div className="flex flex-col w-full py-10">
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

            <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">LEADERSHIP</p>

             {leadershipExperiences.map((group, index) => (
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
            <p className="font-aeonik-thin tracking-widest text-[18px] border-b border-gray-400 pb-3">PROGRAMS</p>

             {programExperiences.map((group, index) => (
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

          <div className="w-full pt-1 pb-1">            
            <p className="font-voyager-thin text-[24px] text-white leading-snug">
              You can find my industry resources 
              {' '}
              <InteractiveLink 
                href="https://github.com/cslegasse/CS-Tech-Resource-Hub" 
                event='here' 
                underline={true} 
                newTab={true}
              >
                here
              </InteractiveLink>.
            </p>

          </div>
        </TracingBeam>
        </div>
      
      </div>
      <Footer2/>
    </>
  );
};
export default About;