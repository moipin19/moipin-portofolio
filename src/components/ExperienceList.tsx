import { experiences } from "@/data/experience";

export function ExperienceList() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
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
            {exp.bullets.map((b, i) => (
              <li key={i} className="text-[#d4d4d8] text-sm leading-relaxed flex items-start gap-3">
                <span className="text-blue-500 mt-1.5 flex-shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

