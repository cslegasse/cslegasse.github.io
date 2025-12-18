"use client";

import React from "react";
import { cn } from "../../lib/cn";
import { CheckCircle, Lightbulb, Star } from "lucide-react";

export type Lesson = {
  title: string;
  description: string;
  icon?: "check" | "star" | "lightbulb";
};

export type LessonSection = {
  lessons: Lesson[];
};

interface LessonsProps {
  sections: LessonSection[];
  className?: string;
}

const iconMap = {
  check: <CheckCircle className="w-5 h-5 text-blue-400" />,
  star: <Star className="w-5 h-5 text-yellow-400" />,
  lightbulb: <Lightbulb className="w-5 h-5 text-green-400" />,
};

export const Lessons: React.FC<LessonsProps> = ({ sections, className }) => {
  return (
    <div className={cn("w-full max-w-6xl mx-auto flex flex-col gap-12", className)}>
      {sections.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-6">
        

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.lessons.map((lesson, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-black/50">
                  {lesson.icon ? iconMap[lesson.icon] : <CheckCircle className="w-5 h-5 text-blue-400" />}
                </div>
                <div className="flex flex-col">
                  <h3 className="font-header text-lg text-white group-hover:text-blue-400 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="font-body text-gray-300 leading-relaxed mt-1">{lesson.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
