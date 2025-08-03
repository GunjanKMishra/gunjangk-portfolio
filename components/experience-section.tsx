"use client"

import { useState } from "react"
import { ExternalLink, X, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Link from "next/link"

const experiences = [
  {
    id: 1,
    title: "Software Development Engineer (SDE) Intern",
    company: "IITD AIA Foundation for Smart Manufacturing",
    period: "Jan 25 – April 25",
    description:
      "Built the core software platform for the Central Manufacturing Facility (CMF) of IIT Delhi under the direct supervision of the CMF Director Dr Sunil Jha.",
    techStack: ["TypeScript", "Prisma ORM", "Next.js", "Express.js", "ShadCn UI"],
    achievements: [
      "Built the core software platform for the Central Manufacturing Facility (CMF) of IIT Delhi",
      "Developed a full-stack solution to automate scheduling, machine usage, and workshop/lab management across multiple departments",
      "Enabled seamless booking of high-end manufacturing resources, interdisciplinary collaboration, and industry-academic engagement",
      "Delivered scalable, well-documented code, and participated in collaborative code reviews and deployment cycles",
    ],
    links: [{ label: "IIT Delhi", url: "https://cmf.iitd.ac.in/" }],
  },
  {
    id: 2,
    title: "Smart India Hackathon Winner",
    company: "Government of India",
    period: "Oct 23 – Dec 23",
    description: "Won Smart India Hackathon by developing a language translator tool for government organizations.",
    techStack: ["React", "Node.js", "Python", "ML", "TensorFlow", "Hugging Face"],
    achievements: [
      "Language translator tool to convert English to Hindi without using JSON files",
      "Dataset available on Hugging Face with ML and deep learning methodologies",
      "Created website and web extension for translation implementation",
      "Single web developer in team with 48 hours of continuous programming in finale",
    ],
    links: [
      { label: "SIH", url: "https://www.sih.gov.in/" },
    ],
  },
  {
    id: 3,
    title: "Joint Sec & WebD Team Lead",
    company: "IEEE MAIT Chapter",
    period: "Aug 23 – July 25",
    description: "Led the top-most team at IEEE MAIT Chapter, managed technical initiatives and event coordinations.",
    techStack: ["Web Development", "Team Leadership", "Event Management"],
    achievements: [
      "Developed and implemented a comprehensive website enhancement strategy for IEEE MAIT",
      "Created and curated engaging newsletters using Luma and Google Forms for 10+ events",
      "Resulted in a 25% increase in event registrations and a 40% boost in attendee engagement",
      "Lead team for in-campus promotions and make awareness among 300+ new students",
    ],
    links: [{ label: "IEEE MAIT", url: "https://www.mait.ac.in/index.php/component/content/article/ieee-mait-student-branch.html?catid=10&Itemid=384" }],
  }
]

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<(typeof experiences)[0] | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">
            Here's a timeline of my professional journey, showcasing my roles and contributions in blockchain and
            full-stack development.
          </p>
        </motion.div>

        {/* <TracingBeam className="px-6"> */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Experience Card - Full Width */}
              <div
                className="w-full p-8 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-900/100 transition-all duration-300 cursor-pointer hover:border-blue-500/50 group"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 text-lg">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{exp.period}</span>
                    </div>

                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    {/* <div className="flex gap-2">
                      {exp.links.map((link) => (
                        <Button
                          key={link.label}
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-blue-400"
                        >
                          {link.label}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </Button>
                      ))}
                    </div> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* </TracingBeam> */}

        {/* Experience Detail Modal */}
        <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
          <DialogContent className="bg-gray-900 border-gray-800 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{selectedExperience?.title}</h3>
                  <p className="text-gray-400">{selectedExperience?.company}</p>
                </div>
                {/* <Button variant="ghost" size="icon" onClick={() => setSelectedExperience(null)}>
                  <X className="h-4 w-4" />
                </Button> */}
              </DialogTitle>
            </DialogHeader>

            {selectedExperience && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedExperience.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2">
                          <span className="text-blue-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-2">
                  {selectedExperience.links.map((link) => (
                    <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        {link.label}
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
