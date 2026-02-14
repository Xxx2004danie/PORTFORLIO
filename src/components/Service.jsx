

function ServiceSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom, scalable and high-performance web applications built with modern technologies.",
    },
    {
      title: "UI / UX Design",
      description:
        "Beautiful, clean and user-friendly interfaces designed for smooth user experiences.",
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications designed for speed, accessibility and performance.",
    },
  ];

  return (
    <main
      className="bg-gray-50 py-20 px-6 w-full  "
      id="services"
    >
      <section className="max-w-6xl mx-auto text-center">
        <p className="text-4xl font-bold text-gray-800"> SERVICES</p>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          We offer professional digital solutions tailored to your project
          needs.
        </p>

        <section className="grid md:grid-cols-3 gap-10 mt-14">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white p-8 shadow-md rounded-2xl hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <h1 className="text-indigo-600 mb-5 flex justify-center">
                icon
              </h1>
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-3">{service.description}</p>
            </article>
          ))}
        </section>

        <article class="w-full flex justify-center md:justify-end py-4 px-2  ">
          <p class="text-[clamp(2rem, 5vw, 6rem)] text-blue-400 border-b-2 border-blue-400 font-extrabold hover:text-blue-700  hover:border-blue-700 transition-colors duration-300 ease-in-out">
            see more
          </p>
        </article>
      </section>
    </main>
  );
}

export default ServiceSection;
