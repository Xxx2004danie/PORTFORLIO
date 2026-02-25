import { Link, Outlet } from "react-router-dom";
import ContactPage from "../pages/contact";

function Hero() {
  return (
    <header className="bg-white text-black min-h-screen flex">
      <main className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Hero Content */}
        <article className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-400">Sheriff</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-500">
            Frontend Developer & UI Designer
          </h2>

          <p className="text-gray-800 max-w-md mx-auto lg:mx-0">
            I build modern, user-friendly web applications using React.js and
            TailwindCSS. I love crafting clean interfaces and solving real-world
            problems.
          </p>

          {/* Call to Actions */}
          <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/viewprojectbutton"
              className="bg-black text-white hover:bg-gray-100 hover:text-black px-6 py-3 rounded-lg font-semibold text-center"
            >
              View Projects
            </Link>
            <Link
              className="text-neutral-600 border border-gray-400 px-6 py-3 rounded-lg hover:bg-black hover:text-white text-center"
              to="/contactbutton"
            >
              contact me
            </Link>
          </nav>
          <Outlet />
        </article>

        {/* Profile Image heroSection_viewProject_button */}
        <figure className="flex justify-center lg:justify-end">
          <img
            src="picture.png"
            alt="Sheriff profile"
            className="w-60 h-60 md:w-90 md:h-90 rounded-2xl object-cover shadow-lg"
          />
        </figure>
      </main>
    </header>
  );
}

export default Hero;
