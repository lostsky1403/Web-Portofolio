"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-emerald-500">Fikri</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-6">
              Cloud Computing & Backend Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Sixth-semester Computer Engineering student with expertise in backend development and cloud solutions
              using Google Cloud Platform (GCP).
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex mt-8 gap-4">
              <a
                href="https://github.com/lostsky1403"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/fikri-chaerul"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:chaerulchalikr@gmail.com"
                className="text-gray-600 hover:text-emerald-500 dark:text-gray-400 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-xl">
              <img
                src="/IMG_8270-copy1.jpg?height=320&width=320"
                alt="Mochammad Fikri"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
