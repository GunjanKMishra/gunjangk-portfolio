"use client"

import { Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { link } from "fs"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Ultimate Guide for Beginners: Navigating Git and GitHub in the World of Tech",
    excerpt:
      "Imagine You’ve just finished a project for a client. After seeing it, she suggests some changes, and you spend a week tweaking the design and functionality. Excitedly, you present the updated version, only for her to say, “The previous one was more appealing. Can we go back to that?”...",
    date: "Jan 2, 2025",
    link: "https://dev.to/gunjanmishra/the-ultimate-guide-for-beginners-navigating-git-and-github-in-the-world-of-tech-1h9k",
    featured: true,
  },
  {
    title: "Mastering VIM: A Complete Beginner's Guide to the Command-Line Editor",
    excerpt:
      "The issue was on the production server, and Anaya needed to quickly edit a configuration file. She tried logging into the server's control panel, downloading the file, opening it in VS Code, editing it, and uploading it back - but the server was restricting file uploads for security reasons. Then she remembered VIM...",
    date: "Jan 9, 2025",
    link: "https://dev.to/gunjanmishra/mastering-vim-a-complete-beginners-guide-to-the-command-line-editor-270o",
    featured: true,
  }
]

export function BlogsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Blogs</h2>
          <p className="text-gray-400 text-lg">
            I write about software development, sharing insights and experiences from my journey in tech.
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`w-full p-8 rounded-xl border border-gray-800 bg-gray-900/80 hover:bg-gray-900/100 transition-all duration-300 cursor-pointer hover:border-blue-500/50 group ${post.featured ? "border-blue-500/50 bg-blue-500/5" : ""
                }`}
            >
              <Link href={post.link} target="_blank">
                <div className="flex items-start gap-6">
                  {post.featured && (
                    <div className="w-1 h-full bg-blue-500 rounded-full min-h-[120px] flex-shrink-0"></div>
                  )}

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
