import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className=" my-[70px] 
      w-full bg-gray-50 py-16 px-6 md:px-12 lg:px-24"
      aria-labelledby="about-heading"
    >
      <article className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Main Content */}
        <header>
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            About Me
          </h2>

          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            Sheriff — Full Stack MERN Developer
          </h3>

          <p className="text-gray-600 leading-relaxed mb-4">
            I’m Sheriff, a passionate Full Stack MERN Developer focused on
            building scalable and efficient web applications. I enjoy crafting
            clean, user-friendly solutions using modern JavaScript technologies.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            My experience includes working with MongoDB, Express.js, React.js,
            and Node.js, along with RESTful APIs, authentication systems, and
            responsive UI design. I prioritize performance, accessibility, and
            maintainable code.
          </p>

          <p className="text-gray-700 font-medium">
            <strong>Nationality:</strong>{" "}
            <span className="font-semibold">Nigeria</span>
          </p>
        </header>

        {/* Complementary Content */}
        <aside className="flex justify-center md:justify-end">
          <section className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Tech Stack
            </h4>

            <ul className="space-y-2 text-gray-600">
              <li>MongoDB</li>
              <li>Express.js</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Tailwind CSS</li>
            </ul>
          </section>
        </aside>
      </article>
    </section>
  );
};

export default AboutMe;
