"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Server, Database, GitBranch, Code, Library } from "lucide-react"

const skills = [
    {
        category: "Frontend",
        icon: <Code className="w-5 h-5" />,
        list: ["React.js", "Next.js", "Tailwind CSS", "ShadCN", "Aceternity UI"]
    },
    {
        category: "Backend",
        icon: <Server className="w-5 h-5" />,
        list: ["Node.js", "Express.js", "Prisma ORM", "Kafka", "REST APIs"]
    },
    {
        category: "Databases",
        icon: <Database className="w-5 h-5" />,
        list: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
        category: "DevOps & Cloud",
        icon: <GitBranch className="w-5 h-5" />,
        list: ["Docker", "Git", "GitHub", "CI/CD (GitHub Actions)", "AWS EC2", "Vercel", "Netlify", "Render", "Postman"] // [cite: 9]
    },
    {
        category: "Programming Languages",
        icon: <Code className="w-5 h-5" />,
        list: ["JavaScript", "TypeScript", "C/C++", "Java", "SQL", "PHP", "Python"]
    },
    {
        category: "Core Fundamentals",
        icon: <Library className="w-5 h-5" />,
        list: ["OOP", "DBMS", "Operating Systems", "Computer Networks", "Data Structures & Algorithms"]
    }
];

export function SkillsSection() {
    return (
        <section className="py-20 px-4 pt-0">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold text-blue-400 mb-4">Technologies</h2>
                    <p className="text-gray-400 text-lg">
                        The tools and technologies I use to build and scale applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skillCategory, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                            className="w-full p-6 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-900/100 transition-all duration-300 hover:border-blue-500/50 group"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-blue-400">
                                    {skillCategory.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {skillCategory.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillCategory.list.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700 text-sm font-medium">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}