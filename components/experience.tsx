"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Cloud Computing Learning Path",
      company: "Bangkit Academy",
      period: "2024",
      description: [
        "Getting intensive Cloud Computing training using Google Cloud Platform (GCP)",
        "Contributed to the final project SakuNusa in building a cloud environment, developing a RESTful API, and deploying machine learning",
        "Collaborated with other divisions including Machine Learning and Mobile Development",
      ],
    },
  ]

  const expertiseAreas = [
    {
      title: "Web Programming",
      description: "Building web applications using Laravel and React",
    },
    {
      title: "Backend",
      description:
        "Building a backend with relational databases like MySQL, PostgreSQL, and Oracle as well as non-relational databases like MongoDB, Cassandra, and Redis",
    },
    {
      title: "Cloud Computing",
      description:
        "Build an environment for an application, perform application deployment, monitor Cloud resources, secure Cloud infrastructure network traffic",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience & <span className="text-emerald-500">Expertise</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
              <Briefcase className="mr-2 text-emerald-500" size={24} />
              Work Experience
            </h3>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-emerald-500 pb-8">
                  <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-0"></div>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <h4 className="text-xl font-medium text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">{exp.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Areas of Expertise</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-2">{area.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300">{area.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
