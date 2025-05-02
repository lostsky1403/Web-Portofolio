export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Mochammad Fikri<span className="text-emerald-500">.</span>
            </h2>
            <p className="text-gray-400 mt-1">Cloud Computing & Backend Developer</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400">&copy; {currentYear} Mochammad Fikri. All rights reserved.</p>
            <p className="text-gray-500 text-sm mt-1">Built with Next.js and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
