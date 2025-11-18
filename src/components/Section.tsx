import { ReactNode } from "react";

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="reveal scroll-mt-24 py-20 relative">
      <div className="relative">
        <div className="relative inline-block mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white relative z-10">
            <span className="gradient-text">{title}</span>
          </h2>
          {/* Enhanced gradient underline */}
          <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-80"></div>
          <div className="absolute -bottom-2 left-0 w-20 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm opacity-60"></div>
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </section>
  );
}

