"use client"

import Image from "next/image"
import { Twitter, Github, Linkedin, MessageCircle, MailIcon, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl text-left">
        {/* Social Links - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed top-8 right-8 flex gap-4 z-20"
        >
          <a href="https://drive.google.com/file/d/1mMVVUovvq4X5bRjbcwvesMe2ov4O_37e/view" target="_blank">
            <Button
              variant="outline"
              className="text-gray-300 border-gray-700 hover:bg-white/10 hover:text-blue-500 border-blue-500/50 transition-all duration-300"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </a>

          <a href="https://twitter.com/_gunjanmishra" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
              <Twitter className="h-5 w-5" />
            </Button>
          </a>

          <a href="https://github.com/GunjanKMishra" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
              <Github className="h-5 w-5" />
            </Button>
          </a>

          <a href="https://linkedin.com/in/gunjankmishra" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a href="mailto:igunjan096@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
              <MailIcon className="h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-32 h-32 rounded-2xl overflow-hidden ring-2 ring-black/10 shadow-lg">
            <Image
              src="/profile.png"
              alt="Gunjan Mishra"
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-2xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        >
          Hi, I'm Gunjan Mishra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-400 mb-8"
        >
          Computer Science Student | Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a Full Stack Developer and Computer Science student at MAIT, New Delhi. I specialize in building
            scalable web applications, AI-powered solutions, and have experience working on government projects. From
            winning Smart India Hackathon to developing platforms for IIT Delhi, I turn complex problems into elegant
            digital solutions.
          </p>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-gray-400">Available for work</span>
        </motion.div>
      </div>
    </section>
  )
}
