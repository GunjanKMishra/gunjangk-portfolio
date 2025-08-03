"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { motion } from "framer-motion"
import { link } from "fs"

const projects = [
  {
    title: "Main Platform for CMF, IIT Delhi",
    description:
      "Full-stack centralized software platform to digitize and automate IIT Delhi's manufacturing ecosystem with scalable architecture",
    techStack: ["TypeScript", "Prisma ORM", "Next.js", "Express.js", "ShadCn UI"],
    type: "Client",
    link: "https://cmf.iitd.ac.in"
  },
  {
    title: "Lingua Master (Website + Web Extension + Telegram Bot)",
    description:
      "ML-powered Language Translator tools handling real-time English <-> Hindi translations for government and commercial websites without maintaining a single JSON file. utilized a dataset of 1.6 million rows.",
    techStack: ["React", "Node.js", "Python", "Flask", "TensorFlow", "Hugging Face", "REST API"],
    type: "Client",
    link: "https://drive.google.com/file/d/1FyjD1hBbF4L0Q2VSJ__yhtxfEnOh6AiE/view"
  },
  {
    title: "GunjanMishra.com",
    description:
      "Comprehensive personal branding website showcasing blogs, projects, newsletters, and creative ideas with cohesive branding elements",
    status: "Ongoing",
    techStack: ["Next.js", "Tailwind", "Shadcn UI", "Zod", "TypeScript", "Express.js", "MongoDB"],
    type: "Personal",
    link: "https://gunjanmishra.com"
  },
  {
    title: "New Gemini",
    description:
      "Full-stack conversational AI application replicating core functionalities of Google Gemini using the Gemini Flash model's SDK",
    techStack: ["Tailwind", "Node.js", "Express.js", "React.js", "Gemini Flash SDK"],
    type: "Personal",
    link: "https://github.com/GunjanKMishra/New-Gemini"
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Projects</h2>
          <p className="text-gray-400 text-lg">
            A collection of my work spanning from UI friendly applications to full-stack projects, both personal and
            professional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <HoverEffect items={projects} className="grid-cols-1 md:grid-cols-2" />
        </motion.div>
      </div>
    </section>
  )
}
