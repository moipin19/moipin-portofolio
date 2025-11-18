import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="py-16 border-t border-[#27272a] text-center">
      <p className="text-[#a1a1aa] text-sm">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
