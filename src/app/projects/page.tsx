import Image from "next/image";
import Link from 'next/link';
import Button from '@components/Button';
import Navbar from "@components/Navbar"
import Footer from "@components/Footer"
import { TracingBeam } from "@components/ui/tracing-beam";


const projects =[

  {
    name: "Krop Store",
    role: "Growth Engineer",
    year: "2022-2024",
    description: "Fashion and clothing by Gen-Z, for Gen-Z.",
    image: "/projects/krop8.jpg",
    link: "https://krop.store",
    linkText: "VIEW LANDING PAGE",
    secondLink: false,
    linkText2: "VIEW MOBILE APP"
  },
    {
    name: "Wally Hub",
    role: "Developer",
    year: "2021",
    description: "A ROBLOX scripting hub.",
    image: "/projects/wrdwally.png",
    link: "https://github.com/PitchyATree/roblox-exploit-library/blob/main/wally%20v3%20library",
    linkText: "VIEW LANDING PAGE",
    secondLink: false,
    linkText2: "VIEW MOBILE APP"
  },
    {
    name: "Incognito Client",
    role: "Developer",
    year: "2020-2021",
    description: "A Minecraft hack client.",
    image: "/projects/incognito.png",
    link: "https://builtbybit.com/",
    linkText: "VIEW LANDING PAGE",
    secondLink: false,
    linkText2: "VIEW MOBILE APP"
  },
  {
    name: "Synapse X",
    role: "Script Developer",
    year: "2018-2022",
    description: "DLL injection stub for serverside script execution in ROBLOX.",
    image: "/projects/synapsex.jpg",
    link: "http://x.synapse.to",
    linkText: "VIEW LANDING PAGE",
    secondLink: false,
    linkText2: "VIEW MOBILE APP"
  },
];


const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-start text-6xl font-bold gap-y-4 ">
        <TracingBeam className="px-0 md:px-2 mb-1">
          <div
            className="flex flex-col w-full md:justify-center space-y-4 items-start">
            <Link href="/" className="w-full font-body tracking-regular space-y-3 text-sm mb-4">
              <p>← BACK TO HOME </p>
            </Link>
          </div>
          <div
            className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <p className="w-full font-body tracking-tight text-center leading-[100%] text-[21px] mb-3">PROJECTS </p>
              <h1 className="w-full font-body text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">some things i've worked on</h1>
              {projects.map((project) => (
              <div key={project.name} className="w-full flex flex-col md:flex-row md:space-x-5 py-6 md:py-10 items-start font-body tracking-regular space-y-3 text-sm">
                <div className="flex flex-col md:flex-row w-full md:w-1/2 lg:w-1/2">
                  <Image
                    priority
                    src={project.image}
                    height={400}
                    width={300}
                    alt={project.name}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-row space-x-3 text-[23px] md:text-[32px]">
                    <h1 className="font-body">{project.name}</h1>
                    <h1 className="font-body italic"> || </h1>
                    <h1 className="font-body">{project.role}</h1>
                  </div>
                  <p className="pt-3">{project.year}</p>
                  <div className="flex flex-row my-10 tracking-normal font-body text-[18px] leading-[125%]">
                    <p>{project.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 text-center md:text-start">
                    <Button
                    text={project.linkText}
                    link={project.link}
                    newTab={true}
                    event={`'projectsProjectClicked', { project: project.name }`}
                    ></Button>
                    {project.secondLink && <Button text={project.linkText2 || ''} link={project.link || '#'} newTab={true}></Button>}
                  </div>
                </div>
              </div>
            ))}

          </div>
          </TracingBeam>
        </div>
      <Footer/>

      </div>

    </>
  );
};
export default Projects;
