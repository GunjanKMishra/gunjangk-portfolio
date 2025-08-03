"use client"

import { Mail, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">
            Let's connect and discuss opportunities, projects, or just have a chat about technology!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:border-blue-500/50 group text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm mb-4">igunjan096@gmail.com</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Send Email
            </Button>
          </div>

          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:border-blue-500/50 group text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Phone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400 text-sm mb-4">+91 7011908861</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Call Now
            </Button>
          </div>

          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:border-blue-500/50 group text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Github className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm mb-4">GunjanKMishra</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              View Profile
            </Button>
          </div>

          <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/70 transition-all duration-300 hover:border-blue-500/50 group text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
              <Linkedin className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm mb-4">gunjankmishra</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Connect
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
