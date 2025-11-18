import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceList } from "@/components/ExperienceList";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Skills } from "@/components/Skills";
import { EducationList } from "@/components/EducationList";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {/* Background grid pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none"></div>
      
      <Nav />
      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />

        <Section id="about" title="About">
          <About />
        </Section>

        <Section id="experience" title="Experience">
          <ExperienceList />
        </Section>

        <Section id="projects" title="Projects">
          <ProjectGrid />
        </Section>

        <Section id="skills" title="Skills">
          <Skills />
        </Section>

        <Section id="education" title="Education">
          <EducationList />
        </Section>

        <Section id="contact" title="Contact">
          <Contact />
        </Section>

        <Footer />
      </main>
    </div>
  );
}
