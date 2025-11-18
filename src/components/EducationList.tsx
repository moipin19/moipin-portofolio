import { education } from "@/data/education";

export function EducationList() {
  return (
    <div className="space-y-4">
      {education.map((e, index) => (
        <div 
          key={e.school} 
          className="p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-green-500/50 transition-all duration-300"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h4 className="text-xl font-semibold text-white">{e.school}</h4>
              <p className="text-[#a1a1aa] mt-1">{e.degree}</p>
            </div>
            <span className="text-sm text-[#a1a1aa] bg-[#27272a] px-3 py-1 rounded-full inline-block w-fit">
              {e.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

