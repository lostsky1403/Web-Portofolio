"use client"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Tabunganku",
      description: "Transaction dashboard built with Laravel for tracking personal finances and savings.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      image: "/placeholder.svg?height=300&width=500",
      links: {
        github: "https://github.com/lostsky1403/Project_Kelompok_3",
        live: "#",
      },
    },
    {
      title: "SobatSehat",
      description:
        "Community-centric service dedicated to connecting individuals with health-related events and activities.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500",
      links: {
        github: "https://github.com/lostsky1403/SobatSehat",
        live: "#",
      },
    },
    {
      title: "News RESTful API",
      description:
        "Backend for a news portal with features for article management, user authentication, and content categorization.",
      tags: ["Node.js", "Express", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500",
      links: {
        github: "https://github.com/lostsky1403/Backend-2023/tree/SE02/UTS-RESTful-API-News",
        live: "#",
      },
    },
    {
      title: "Human Resource Development RESTful API",
      description:
        "Robust backend framework designed to streamline human resource management with features for employee data, performance tracking, and more.",
      tags: ["Laravel", "MySQL", "API"],
      image: "/placeholder.svg?height=300&width=500",
      links: {
        github: "https://github.com/lostsky1403/Backend-2023/tree/SE02/UAS",
        live: "#",
      },
    },
    {
      title: "SakuNusa",
      description:
        "Application that helps improve financial literacy and provides insights into spending patterns through anomaly detection.",
      tags: ["GCP", "Machine Learning", "Node.js", "React Native"],
      image: "/SakuNusa-logo.svg?height=300&width=500",
      links: {
        github: "https://github.com/Rivalzy/SakuNusa",
        live: "#",
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My <span className="text-emerald-500">Projects</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600" asChild>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a
              href="https://github.com/lostsky1403"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github size={18} className="mr-2" />
              See more projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
