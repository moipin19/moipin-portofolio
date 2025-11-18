import { skills } from "@/data/skills";

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="group p-6 rounded-2xl bg-[#18181b] border border-[#27272a] hover:border-pink-500/50 transition-all duration-300">
      <h4 className="font-semibold text-white mb-4 text-lg group-hover:text-pink-400 transition-colors duration-200">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((s, index) => (
          <span 
            key={s} 
            className="px-3 py-2 rounded-lg bg-[#27272a] text-sm font-medium text-[#d4d4d8] border border-[#3f3f46] hover:border-pink-500/50 hover:text-pink-400 transition-all duration-200 hover:scale-105"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <List title="Languages" items={skills.languages} />
      <List title="Frameworks & Libraries" items={skills.frameworks} />
      <List title="Styling" items={skills.styling} />
      <List title="Testing" items={skills.testing} />
      <List title="Tools" items={skills.tools} />
      <List title="Practices" items={skills.practices} />
    </div>
  );
}

