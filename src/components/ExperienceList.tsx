"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export function ExperienceList() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => {
        const isExpanded = expanded[index] ?? false;
        const bulletsToShow = isExpanded ? exp.bullets : exp.bullets.slice(0, 2);
        const hasMore = exp.bullets.length > 2;

        return (
          <div 
            key={exp.company} 
            className="group relative p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-blue-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-sm text-[#a1a1aa] bg-[#27272a] px-3 py-1 rounded-full inline-block w-fit">
                {exp.duration}
              </span>
            </div>
            <ul className="space-y-2 mt-4">
              {bulletsToShow.map((b, i) => (
                <li key={i} className="text-[#d4d4d8] text-sm leading-relaxed flex items-start gap-3">
                  <span className="text-blue-500 mt-1.5 flex-shrink-0">▹</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {hasMore && (
              <button
                onClick={() => toggleExpanded(index)}
                className="mt-4 flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
              >
                <span>{isExpanded ? "Show Less" : `Show ${exp.bullets.length - 2} More`}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

