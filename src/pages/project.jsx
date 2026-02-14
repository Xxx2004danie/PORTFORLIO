import { motion } from "framer-motion";
import ProjectsSection from "../components/project";

function ProjectPage() {
  return (
    <section className="grid grid-cols-1 gap-10 bg-gray-50 py-16 m-15">
      {/* Weather App */}
      <section className="flex justify-center items-center gap-6 h-[350px] max-w-6xl mx-auto px-10">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="h-full w-1/2 hidden md:block"
        >
          <motion.img
            src="weather-image.jpg"
            alt="Calculator App"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.article>

        <article className="h-full w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold md:text-center">
            Weather Web Application
          </h1>

          <p className="text-sm sm:text-base text-gray-400 md:text-center mt-2 leading-7">
            A responsive weather application built with HTML, Tailwind CSS, and
            JavaScript, featuring real-time weather data and API integration.
          </p>

          <a
            href="https://github.com/your-username/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm sm:text-base text-blue-500 underline md:text-center"
          >
            View on GitHub
          </a>
        </article>
      </section>

      {/* Calculator App */}
      <section className="flex justify-center items-center gap-6 h-[350px] max-w-6xl mx-auto px-10">
        <article className="h-full w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold md:text-center">
            Calculator Web Application
          </h1>

          <p className="text-sm sm:text-base text-gray-400 md:text-center mt-2 leading-7">
            A responsive calculator designed to perform basic arithmetic
            operations.
          </p>

          <p className="text-sm sm:text-base md:text-center mt-2 leading-7">
            Built with <strong>HTML</strong>, <strong>Tailwind CSS</strong>, and{" "}
            <strong>JavaScript</strong>, using OOP principles and JavaScript
            classes.
          </p>

          <a
            href="https://github.com/your-username/calculator-project"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-sm sm:text-base text-blue-500 underline md:text-center"
          >
            View Source Code on GitHub
          </a>
        </article>

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full w-1/2 hidden md:block"
        >
          <motion.img
            src="calculator-image.jpg"
            alt="Calculator App"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.article>
      </section>

      {/* Other projects */}
      <ProjectsSection />
    </section>
  );
}

export default ProjectPage;
