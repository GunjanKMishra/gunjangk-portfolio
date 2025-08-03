"use client"

import { HeroSection } from "@/components/hero-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogsSection } from "@/components/blogs-section"
import { GridBackground } from "@/components/ui/grid-background"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function Home() {
  return (
    <GridBackground className="min-h-screen bg-[#0D0B0E]">
      {/* <BackgroundBeams /> */}
      <div>
        <HeroSection />
        <TracingBeam className="px-6">
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <BlogsSection />
          {/* <ContactSection /> */}
        </TracingBeam>
      </div>
    </GridBackground>
  )
}
