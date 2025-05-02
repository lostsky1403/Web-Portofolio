"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About <span className="text-emerald-500">Me</span>
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a sixth-semester Computer Engineering student with a strong foundation in backend development using
              Node.js, Express.js, and Laravel. I have expertise in implementing cloud solutions using Google Cloud
              Platform (GCP), including Cloud Run and Google Kubernetes Engine (GKE).
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              My technical skills include mastery of programming languages such as Javascript and PHP, as well as a deep
              understanding of database management systems including MySQL, Oracle, Redis, MongoDB, ElasticSearch, and
              Hadoop.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Equipped with strong problem-solving skills and a passion for continuous learning, I am currently seeking
              an internship opportunity in cloud computing to apply and deepen my knowledge in this field.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Education</h3>
                <ul className="space-y-4">
                  <li className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-600 dark:text-emerald-400">Bangkit Academy</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Cloud Computing Learning Path</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2024</p>
                  </li>
                  <li className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-medium text-emerald-600 dark:text-emerald-400">
                      Sekolah Tinggi Teknologi Terpadu Nurul Fikri
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Informatics Engineering</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">2022 - Present</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Current GPA: 3.89</p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Contact Information</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <span className="font-medium">Email:</span> chaerulchalikr@gmail.com
                  </li>
                  <li>
                    <span className="font-medium">Phone:</span> +6283873127210
                  </li>
                  <li>
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <a
                      href="https://www.linkedin.com/in/fikri-chaerul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      www.linkedin.com/in/fikri-chaerul
                    </a>
                  </li>
                  <li>
                    <span className="font-medium">GitHub:</span>{" "}
                    <a
                      href="https://github.com/lostsky1403"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      github.com/lostsky1403
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
