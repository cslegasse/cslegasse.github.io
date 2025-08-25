import Image from "next/image";
import Link from 'next/link';
import Button from '../../components/Button';
import Navbar from "../../components/Navbar"
import Footer2 from "../../components/Footer-2"
import { TracingBeam } from "../../components/ui/tracing-beam";
import Marquee from "react-fast-marquee";


const projects =[

  {
    name: "Krop Store",
    role: "Growth Engineer",
    year: "2022-Now",
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
    description: "DLL injection stub for serverside script execution in ROBLOX",
    image: "/projects/synapsex.jpg",
    link: "http://x.synapse.to",
    linkText: "VIEW LANDING PAGE",
    secondLink: false,
    linkText2: "VIEW MOBILE APP"
  },
];

const freelance = [
  {
    name: "Ryne AI",
    link: "https://ryne.ai/",
    image: ""
  },
  {
    name: "Gelrova",
    link: "https://gelrova.com",
    image: ""
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
            <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
              <p>← BACK TO HOME </p>
            </Link>
          </div>
          <div
            className="flex flex-col w-full align-center justify-center space-y-4 items-start">
              <p className="w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3">PROJECTS </p>
              <h1 className="w-full font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">some things i've worked on</h1>
              {projects.map((project) => (
              <div key={project.name} className="w-full flex flex-col md:flex-row md:space-x-5 py-6 md:py-10 items-start font-aeonik-thin tracking-regular space-y-3 text-sm">
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
                    <h1 className="font-voyager-thin italic">{project.name}</h1>
                    <h1 className="font-voyager-thin italic"> || </h1>
                    <h1 className="font-voyager-thin">{project.role}</h1>
                  </div>
                  <p className="pt-3">{project.year}</p>
                  <div className="flex flex-row my-10 tracking-normal font-aeonik-regular text-[18px] leading-[125%]">
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
            <div className='flex flex-col justify-end w-full pt-5 pb-0 mt-0'>
              <p className="font-aeonik-thin border-b border-gray-400 pb-3 tracking-widest text-[18px]">FREELANCE WORK</p>
              <div className="flex flex-row items-start w-full">
                <div className="w-2/3 pt-10 pr-20 items-start">
                  {freelance.map((item, index) => (
                    <div key={index} className="hidden group-hover:block">
                      <Image
                        priority
                        src={item.image}
                        height={700}
                        width={600}
                        alt="hi"
                      />
                    </div>
                  ))}
                </div>
                <div className='w-full'>
                  {freelance.map((item, index) => (
                    <Link href={item.link as string} key={index} target="_blank" rel="noopener noreferrer">
                      <div className="w-full border-b border-gray-400 pt-10 group">
                        <p className="font-voyager-thin tracking-tight text-[36px] mb-3">{item.name}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          </TracingBeam>
        </div>
      </div>
      <div className="w-full flex flex-row py-20 overflow-hidden">
                <Marquee gradient gradientColor="#000" gradientWidth={25} className="w-full" speed={85} autoFill loop={0}>
                  {["LETS", "BUILD",].map((word, index) => (
                    <p key={index} className="font-voyager-thin tracking-tight leading-[100%] text-[54px] mr-8">
                      {word}
                    </p>
                  ))}
                </Marquee>
                </div>
      <Footer2/>
    </>
  );
};
export default Projects;
