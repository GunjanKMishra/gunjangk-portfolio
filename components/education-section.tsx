"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Education</h2>
          <p className="text-gray-400 text-lg">My academic journey in Computer Science and Technology.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full p-8 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-900/100 transition-all duration-300 hover:border-blue-500/50 group"
        >
          <div className="flex items-start gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-gray-400 text-lg">Maharaja Agrasen Institute of Technology (MAIT)</p>
                  <p className="text-gray-500">New Delhi, India</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 bg-gray-800 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Sep 22 – Sep 26</span>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Currently pursuing Bachelor's degree in Computer Science with focus on Full Stack Development, Machine
                Learning, and Software Engineering. Previous Member of IEEE MAIT Chapter and winner of multiple hackathons
                including Smart India Hackathon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
