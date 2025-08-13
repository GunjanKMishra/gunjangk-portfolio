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
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-400 mb-3 sm:mb-4">Experience</h2>
          <p className="text-gray-400 text-base sm:text-lg">
            Here's a timeline of my professional journey, showcasing my roles and contributions in blockchain and
            full-stack development.
          </p>
        </motion.div>

        {/* List */}
        <div className="space-y-4 sm:space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative"
            >
              {/* Card */}
              <div
                className="w-full p-4 sm:p-8 rounded-xl border border-gray-800 bg-gray-900/80 md:hover:bg-gray-900/100 transition-all duration-300 cursor-pointer md:hover:border-blue-500/50 group"
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3 mb-3">
                      <div>
                        <h3 className="text-lg sm:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-lg">{exp.company}</p>
                      </div>
                      <span className="self-start sm:self-auto text-[11px] sm:text-sm text-gray-500 bg-gray-800 px-2 py-1 sm:px-3 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                      {exp.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs sm:text-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedExperience} onOpenChange={(open) => !open && setSelectedExperience(null)}>
          <DialogContent
            className="bg-gray-900 border border-gray-800 text-white p-0 overflow-hidden rounded-2xl box-border
            w-[min(92vw,700px)] sm:w-full sm:max-w-2xl max-h-[90vh]"
          >
            <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6">
              <DialogTitle className="flex items-start justify-between gap-3 mt-5 md:mt-2">
                <div className="min-w-0 pr-2 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold break-words">{selectedExperience?.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base break-words">{selectedExperience?.company}</p>
                </div>
              </DialogTitle>
            </DialogHeader>

            {selectedExperience && (
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 overflow-y-auto space-y-5 sm:space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300 text-xs sm:text-sm">{tech}</Badge>
                    ))}
                  </div>
                </div>

                {selectedExperience.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-300 flex items-start gap-2 text-sm sm:text-base">
                          <span className="text-blue-400 mt-1">•</span>
                          <span className="leading-relaxed break-words">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {selectedExperience.links.map((link) => (
                    <Link key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full sm:w-auto">
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
