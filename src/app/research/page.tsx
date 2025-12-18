import Link from 'next/link';
import dynamic from "next/dynamic";

import { TracingBeam } from "@components/ui/tracing-beam";
const InteractiveLink = dynamic(() => import("@components/InteractiveLink"), { ssr: false });
const Footer = dynamic(() => import("@components/Footer"), { ssr: false });
const Navbar = dynamic(() => import("@components/Navbar"), { ssr: false });

export default function Research() {

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
                <Link href="/" className="w-full font-body tracking-regular space-y-3 text-sm mb-4">
                    <p>← BACK TO HOME</p>
                  </Link>

              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
               <p className={'w-full font-body tracking-tight text-center leading-[100%] text-[21px] mb-3'}>
                  RESEARCH
                </p>
                <h1 className="font-body text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">knowledge is power.</h1>
              </div>
      
               <a href="https://drive.google.com/file/d/1MgBJ-6VZQ_7lOih_kZCEEldOp7u98yEK/view?usp=sharing" download="cv.pdf">
                CV
              </a>

              <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                <aside className="md:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
                    
                  <img
                    src="/about/me.JPEG"
                    alt="Profile"
                    className="rounded-full w-48 h-48 object-cover shadow-md mb-4"
                  />
                  <div className="font-header space-y-2 text-sm text-slate-100">
                    <p>
                      <a href="mailto:lr0077@princeton.edu">lr0077@princeton.edu</a>
                    </p>
                    <p>Research Inquiries</p>
                  </div>

              
                </aside>

                <main className="md:col-span-2 space-y-8">
                  <div>
                    <h1 className="font-header text-4xl font-bold mb-2">Legasse Remon</h1>
                    <p className="font-header text-lg text-slate-100 mb-4">
                      I am a 4th year Computer Science undergraduate interested in cybersecurity and human cognition. More recently, machine learning security. Specifically, social engineering and behavioral penetration testing.
                      I am a part of Ebner Lab at the <InteractiveLink href="https://ebnerlab.psych.ufl.edu/" event='ebner' underline={true} newTab={true}>University of Florida</InteractiveLink> and the AI Security Lab at <InteractiveLink href="https://aisecurityresearch.com" event='aisec' underline={true} newTab={true}>Harvard University</InteractiveLink>.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-header mb-2">Research Questions</h2>
                    <ul className="font-body list-disc list-inside text-slate-100 text-[16px]">
                      <li>How can we detect the intent of social engineering?</li>
                      <li>How can we develop and safegaurd technologies from AI-assisted cyberattacks?</li>
                      <li>Are models of cognition formed by deception a good predictor of intent?</li>
                      <li>How can we model individual differences in decision-making to predict cognitive vulnerabilities?</li>
                    </ul>
                  </div>

                <div>
                  <h2 className="text-2xl font-header mb-4">Research Experience</h2>
                  <div className="space-y-2 text-slate-100 text-[16px]">


                  <div>
                       <span className="font-body text-white">Harvard University</span>
                      <div className="flex justify-between">
                        <div className="font-body">Research Collaborator</div>
                        <span className="font-body text-sm text-slate-400">Aug 2025 - Present</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="font-body text-slate-300">Advisor: Dr. Fredrik Heiding</div>
                        <Link href="https://aisecurityresearch.com/" className="font-body text-slate-300 hover:underline"> AI Security Lab </Link>
                      </div>
                  </div>
           

                  <div>
                      <span className="font-body text-white">Princeton University</span>
                      <div className="flex justify-between">
                        <div className="font-body">Research Assistant</div>
                        <span className="font-body text-sm text-slate-400">Aug 2024 – Dec 2025</span>
                      </div>
                       <div className="flex justify-between">
                        <div className="font-body">AI Research Intern</div>
                        <span className="font-body text-sm text-slate-400">Summer 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="font-body text-slate-300">Advisor: Dr. Jonathan Cohen</div>
                        <Link href="ncclab.princeton.edu" className="font-body text-slate-300 hover:underline"> NCC Lab</Link>
                      </div>
                    </div>

                  <div>
                      <span className="font-body text-white">University of Florida</span>
                      <div className="flex justify-between">
                        <div className="font-body">Research Assistant</div>
                        <span className="font-body text-sm text-slate-400">Dec 2022 - Present</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="font-body text-slate-300">Advisor: Dr. Natalie Ebner</div>
                        <Link href="ebnerlab.psych.ufl.edu" className="font-body text-slate-300 hover:underline"> Ebner Lab</Link>
                      </div>
                  </div>

                </div>
                </div> 

                  <div>
                  <h2 className="text-2xl font-header mb-2">Awards</h2>
                    <ul className="space-y-1 text-slate-100 text-[16px]">
                      <li>
                        <span className="font-body text-white">Benjamin A. Gilman Scholarship — U.S. Department of State, 2024 </span> 
                      </li>
                      <li>
                        <span className="font-body text-white">NSF REU Recipient  — Princeton University, 2024 </span>
                      </li>
                      <li>
                        <span className="font-body text-white">Barry M. Goldwater Scholarship Finalist — University of Florida, 2024</span> 
                      </li>
                      <li>
                        <span className="font-body text-white">Ronald E. McNair Post-baccalaureate Achievement Award - University of Florida, 2024</span> 
                      </li>
                      <li>
                        <span className="font-body text-white">BlackHat USA Scholarship — BlackHat USA, 2023 </span> 
                      </li>
                    </ul>
                  </div>

                  <div>
                  <h2 className="text-2xl font-header mb-2">Teaching Philosophy</h2>
                  <p className="font-header text-lg text-slate-100 mb-4">
                    I believe that the purpose of higher education is to teach students the necessary skills on how to think rather than what to think. I like to see teaching as an opportunity to inspire others and empower them. As an instructor, it is my priority to enrich the learning process and make it an experience that will change student’s lives for the better. I want students to “feel” the knowledge they get with participation in courses whether it is in the classroom or online environment. It is my teaching commitment to provide a learning environment that is fun and exciting but challenging at the same time.
                  </p>
                    <ul className="space-y-1 text-slate-100 text-[16px]">
                      <li>
                        <span className="font-body text-white">PSY2012 - Psychology I — Teresa Vasquez (Fall 2025) </span> 
                      </li>
                      <li>
                        <span className="font-body text-white">COP3503C - Programming Fundamentals II - Dr. Joshua Fox (2023-2024)</span> 
                      </li>
                    </ul>
                  </div>

                </main>
              </div>
            </div>
          </TracingBeam>
        </div>
                 <Footer/>

      </div>
    </>
  );
  
}
