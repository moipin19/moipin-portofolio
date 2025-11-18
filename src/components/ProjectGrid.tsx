"use client";

import { useState } from "react";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {projects.map((p, index) => {
        const isExpanded = expanded[index] ?? false;
        const descriptionWords = p.description.split(' ');
        const shortDescription = descriptionWords.slice(0, 20).join(' ');
        const isLongDescription = descriptionWords.length > 20;
        const displayDescription = isExpanded || !isLongDescription ? p.description : `${shortDescription}...`;

        return (
          <article 
            key={p.name} 
            className="group relative p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="space-y-4 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors flex-1">
                  {p.name}
                </h4>
                {p.company && (
                  <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded-full border border-purple-500/20">
                    {p.company}
                  </span>
                )}
              </div>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                {displayDescription}
              </p>
              {isLongDescription && (
                <button
                  onClick={() => toggleExpanded(index)}
                  className="text-purple-400 hover:text-purple-300 text-xs font-medium transition-colors flex items-center gap-1"
                >
                  <span>{isExpanded ? "Show Less" : "Show More"}</span>
                  <svg 
                    className={`w-3 h-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
              <div className="flex flex-wrap gap-2 pt-2">
                {p.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 rounded-lg bg-[#27272a] text-xs font-medium text-[#d4d4d8] border border-[#3f3f46] hover:border-purple-500/50 hover:text-purple-400 transition-all duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

