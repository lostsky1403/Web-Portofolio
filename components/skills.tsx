"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Cloud, Globe, Server } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-emerald-500" />,
      skills: ["JavaScript", "PHP", "Java"],
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
      skills: ["HTML", "CSS", "React", "Vite", "Node.js", "Express.js", "Laravel", "Tailwind CSS"],
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      skills: ["MySQL", "Oracle", "Redis", "MongoDB", "ElasticSearch", "Hadoop"],
    },
    {
      title: "Cloud Computing",
      icon: <Cloud className="w-6 h-6 text-emerald-500" />,
      skills: [
        "Google Cloud Platform (GCP)",
        "Cloud Run",
        "Google Kubernetes Engine (GKE)",
        "BigQuery",
        "Vertex AI",
        "Dataplex",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      skills: ["RESTful API", "Node.js", "Express.js", "Laravel", "Database Design"],
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My <span className="text-emerald-500">Skills</span>
        </h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
