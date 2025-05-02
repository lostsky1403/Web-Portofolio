"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const googleCerts = [
    {
      title: "Build a Data Warehouse with BigQuery",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialLink: "https://www.credly.com/badges/b358f10d-0d81-4dde-a931-37ae09a5885a",
    },
    {
      title: "Build Google Cloud Infrastructure for Azure Professionals",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialLink: "https://www.credly.com/badges/16a2e2ea-767f-4ddc-b736-1950a3a54c25",
    },
    {
      title: "Derive Insights from BigQuery Data",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialLink: "https://www.credly.com/badges/10af96cf-3605-48e9-aa41-2a95f8d8d5d2",
    },
    {
      title: "Build and Deploy Machine Learning Solutions on Vertex AI",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialLink: "https://www.credly.com/badges/09c999f2-9c70-4cad-8548-1769dceefa3a",
    },
    {
      title: "Secure Software Delivery",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialLink: "https://www.credly.com/badges/b41261c0-5378-4366-be3b-8e31c55aebcd",
    },
    {
      title: "Google Cloud Computing Foundations Certificate",
      issuer: "Google Cloud Skills Boost",
      date: "2024",
      credentialLink: "https://www.credly.com/badges/b31148e4-d2d4-4fb0-81d9-5722113aa49e",
    },
  ]

  const dicodingCerts = [
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/JMZV37ELOPN9",
    },
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/NVP7Q2G24ZR0",
    },
    {
      title: "Belajar Dasar Git dengan GitHub",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/53XEO8YN0ZRN",
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/MRZME2MQ3PYQ",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/4EXGQW09GZRL",
    },
    {
      title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/6RPNY76J5Z2M",
    },
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/JMZV4LV53XN9",
    },
    {
      title: "Cloud Practitioner Essentials",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/N9ZOMY18DPG5",
    },
    {
      title: "Google Cloud Engineer",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/N9ZOYN0R6PG5",
    },
    {
      title: "Penerapan Machine Learning dengan Google Cloud",
      issuer: "Dicoding",
      date: "2024",
      credentialLink: "https://www.dicoding.com/certificates/4EXG72W71PRL",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          <span className="text-emerald-500">Certifications</span> & Achievements
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.6 }}
          >
            <Tabs defaultValue="google" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="google">Google Cloud</TabsTrigger>
                <TabsTrigger value="dicoding">Dicoding</TabsTrigger>
              </TabsList>

              <TabsContent value="google">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {googleCerts.map((cert, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-start"
                    >
                      <Award className="text-emerald-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{cert.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.issuer} • {cert.date}
                        </p>
                        <a
                          href={cert.credentialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 dark:text-emerald-400 text-sm inline-flex items-center mt-1 hover:underline"
                        >
                          View Credential
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="dicoding">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {dicodingCerts.map((cert, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 flex items-start"
                    >
                      <Award className="text-emerald-500 mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{cert.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {cert.issuer} • {cert.date}
                        </p>
                        <a
                          href={cert.credentialLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 dark:text-emerald-400 text-sm inline-flex items-center mt-1 hover:underline"
                        >
                          View Credential
                          <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
