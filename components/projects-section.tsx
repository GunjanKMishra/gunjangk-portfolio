"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { motion } from "framer-motion"
import { link } from "fs"

const projects = [
  {
    title: "DMRC Gati - Delhi Metro Fastest Route API",
    description:
      "High-performance fastest-route API for the Delhi Metro network covering 285+ stations across 12 lines, with travel-time computation and interchange penalty logic. Zero-cost access with no API keys or server configuration, enabling quick integration for web and mobile apps.",
    techStack: ["Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    type: "Client",
    link: "https://dmrc-landing.gunjanmishra.com/"
  },
  {
    title: "Main Platform for CMF, IIT Delhi",
    description:
      "Full-stack digital platform to automate and centralize operations of IIT Delhi's Central Manufacturing Facility, with scalable modules for machine booking, workshop scheduling, lab access management, and role-based authorization across departments.",
    techStack: ["TypeScript", "Prisma ORM", "Next.js", "Express.js", "ShadCn UI"],
    type: "Client",
    link: "https://cmf.iitd.ac.in"
  },
  {
    title: "Lingua Master (Website + Web Extension + Telegram Bot)",
    description:
      "ML-powered language translation tools performing real-time English <-> Hindi translation for government and enterprise websites using a dataset of 1.6M+ records. Replaced static JSON-based methods with dynamic ML inference pipelines, cutting long-term maintenance overhead by 90%.",
    techStack: ["React", "Node.js", "Express.js", "Python", "Flask", "TensorFlow", "Transformers", "Hugging Face", "REST APIs"],
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
