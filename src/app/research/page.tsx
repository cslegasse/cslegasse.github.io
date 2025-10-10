import Link from 'next/link';
import Navbar from "@components/Navbar"
import { TracingBeam } from "@components/ui/tracing-beam";
import InteractiveLink from '../about/InteractiveLink';


export default function Research() {

  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col pt-32 items-start">
        <div className="flex flex-col w-full px-8 sm:px-8 md:px-16 lg:px-20 items-start justify-center gap-y-4">
          <TracingBeam className="px-0 md:px-2">
            <div className="flex flex-col w-full">
                <Link href="/" className="w-full font-aeonik-thin tracking-regular space-y-3 text-sm mb-4">
                    <p>← BACK TO HOME</p>
                  </Link>

              <div className="flex flex-col w-full align-center justify-center space-y-4 items-center">
               <p className={'w-full font-aeonik-bold tracking-tight text-center leading-[100%] text-[21px] mb-3'}>
                  RESEARCH
                </p>
                <h1 className="font-voyager-thin text-[44px] md:text-[54px] leading-[125%] text-center tracking-tight mb-3">knowledge is power.</h1>
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
                  <div className="space-y-2 text-sm text-slate-100">
                    <p>
                      <a href="lr0077@princeton.edu">lr0077@princeton.edu</a>
                    </p>
                    <p>Research Inquiries</p>
                  </div>

                  <div className="flex gap-4 mt-4 text-xl text-slate-100">
                    <a href="https://linkedin.com/legasse-remon/"><i className="fab fa-linkedin" /></a>
                    <a href="https://github.com/cslegasse/"><i className="fab fa-github" /></a>
                  </div>
                </aside>

                <main className="md:col-span-2 space-y-8">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">Legasse Remon</h1>
                    <p className="text-lg text-slate-100 mb-4">
                      I am a 4th year Computer Science undergraduate interested in cybersecurity and human cognition. Specifically, social engineering and behavioral penetration testing.
                      I am a part of Ebner Lab at the <InteractiveLink href="https://ebnerlab.psych.ufl.edu/" event='ebner' underline={true} newTab={true}>University of Florida</InteractiveLink> and the Princeton Neuroscience Institute at <InteractiveLink href="https://ncclab.princeton.edu" event='ncc' underline={true} newTab={true}>Princeton University</InteractiveLink>.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Research Questions</h2>
                    <ul className="list-disc list-inside text-slate-100 text-[16px]">
                      <li>How can we detect the intent of social engineering attacks?</li>
                      <li>How can we develop and safegaurd from AI-assisted cyberattacks?</li>
                      <li>How can we model individual differences in decision-making to predict cognitive vulnerabilities?</li>
                    </ul>
                  </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Research Experience</h2>
                  <div className="space-y-2 text-slate-100 text-[16px]">

                  {/* <div>
                      <span className="font-semibold text-white">Harvard University</span>
                      <div className="flex justify-between">
                        <div className="italic">Research Collaborator</div>
                        <span className="text-sm text-slate-400">Aug 2025 - Present</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-slate-300">Advisor: Dr. Fredrik Heiding </div>
                        <div className="text-slate-300">AI Security Lab</div>
                      </div>
                  </div> */}

                  <div>
                      <span className="font-semibold text-white">University of Florida</span>
                      <div className="flex justify-between">
                        <div className="italic">Research Assistant</div>
                        <span className="text-sm text-slate-400">Dec 2022 - Present</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-slate-300">Advisor: Dr. Natalie Ebner</div>
                        <Link href="ebnerlab.psych.ufl.edu" className="text-slate-300 hover:underline"> Ebner Lab</Link>
                      </div>
                  </div>

                  <div>
                       <span className="font-semibold text-white">Harvard University</span>
                      <div className="flex justify-between">
                        <div className="italic">Research Collaborator</div>
                        <span className="text-sm text-slate-400">Aug 2025 - Present</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-slate-300">Advisor: Dr. Fredrik Heiding</div>
                        <Link href="https://aisecurityresearch.com/" className="text-slate-300 hover:underline"> AI Security Lab </Link>
                      </div>
                      </div>
                  <div>
                      <span className="font-semibold text-white">Princeton University</span>
                      <div className="flex justify-between">
                        <div className="italic">Research Assistant</div>
                        <span className="text-sm text-slate-400">Aug 2024 – Present</span>
                      </div>
                       <div className="flex justify-between">
                        <div className="italic">AI Research Intern</div>
                        <span className="text-sm text-slate-400">Summer 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <div className="text-slate-300">Advisor: Dr. Jonathan Cohen</div>
                        <Link href="ncclab.princeton.edu" className="text-slate-300 hover:underline"> NCC Lab</Link>
                      </div>
                    </div>
                  </div>
                </div> 

                  <div>
                  <h2 className="text-2xl font-semibold mb-2">Awards</h2>
                    <ul className="space-y-1 text-slate-100 text-[16px]">
                      <li>
                        <span className="font-semibold text-white">Benjamin A. Gilman Scholarship</span> — U.S. Department of State, 2024
                      </li>
                      <li>
                        <span className="font-semibold text-white">NSF REU Recipient</span> — Princeton University, 2024
                      </li>
                      <li>
                        <span className="font-semibold text-white">Barry M. Goldwater Scholarship Finalist</span> — University of Florida, 2024
                      </li>
                      <li>
                        <span className="font-semibold text-white">Ronald E. McNair Post-baccalaureate Achievement Award</span> — University of Florida, 2024
                      </li>
                      <li>
                        <span className="font-semibold text-white">Global Collegiate Penetration Testing Competition</span> — Regional 1st (2022), Global 2nd (2024)
                      </li>
                      <li>
                        <span className="font-semibold text-white">BlackHat USA Undergraduate Award</span> — BlackHat USA, 2023
                      </li>
                    </ul>
                  </div>

                  <div>
                  <h2 className="text-2xl font-semibold mb-2">Teaching</h2>
                    <ul className="space-y-1 text-slate-100 text-[16px]">
                      <li>
                        <span className="font-semibold text-white">PSY2012 - Psychology I </span> — Teresa Vasquez (Fall 2025)
                      </li>
                      <li>
                        <span className="font-semibold text-white">COP3503C - Programming Fundamentals II</span> — Dr. Joshua Fox (2023-2024)
                      </li>
                    
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-semibold mb-2">News</h2>
                    <ul className="list-disc list-inside text-slate-100 text-[16px]">
                      <li>None...</li>
                    </ul>
                  </div>

                </main>
              </div>
            </div>
          </TracingBeam>
        </div>
      </div>
    </>
  );
  
}
