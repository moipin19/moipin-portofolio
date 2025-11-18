import { about } from "@/data/profile";

export function About() {
  return (
    <div className="p-8 rounded-2xl bg-[#18181b] border border-[#27272a]">
      <p className="text-[#d4d4d8] leading-relaxed text-lg">{about}</p>
    </div>
  );
}
