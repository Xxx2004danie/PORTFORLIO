import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      description:
        "A modern personal portfolio built with React.js and TailwindCSS.",
    },
    {
      title: "E-Commerce UI",
      image: "/projects/ecommerce.png",
      description: "A clean and responsive e-commerce user interface.",
    },
    {
      title: "Weather App",
      image: "/projects/weather.png",
      description: "Weather forecasting app using API calls.",
    },
  ];

  return (
    <section
      className="w-full bg-white text-black py-20 px-4 sm:px-6 "
      id="projects"
    >
      <header className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-500">Best project</h2>
      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="aspect-video w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </figure>

            <section className="p-5 space-y-3">
              <h3 className="text-xl sm:text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.description}
              </p>
            </section>
          </motion.article>
        ))}
      </section>
    </section>
  );
}
