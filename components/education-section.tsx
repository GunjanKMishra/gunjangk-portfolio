"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl lg:max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-3 sm:mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            My academic journey in Computer Science and Technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full p-4 sm:p-6 md:p-8 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-900/100 transition-all duration-300 hover:border-blue-500/50 group"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Bachelor of Technology in Computer Science
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg">
                    Maharaja Agrasen Institute of Technology (MAIT)
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">New Delhi, India</p>
                </div>
                <div className="inline-flex items-center gap-2 self-start md:self-auto text-gray-500 bg-gray-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-xs sm:text-sm whitespace-nowrap">Sep 22 – Sep 26</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
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
