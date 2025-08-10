const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Aishwarya Jain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Full-stack developer creating innovative web applications with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View My Work
            </a>
            <a href="/inquire" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
