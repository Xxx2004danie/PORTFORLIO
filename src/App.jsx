import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'

// react-icons
import { BiHomeSmile } from "react-icons/bi";
import { FaPhone, FaPortrait } from "react-icons/fa";

// components
import ServiceSection from "./components/Service";
import SkillsSection from "./components/Skills";
import FooterSection from "./components/Footer";

//pages
import Home from "./pages/Home";
import ProjectPage from "./pages/project";
import ContactPage from "./pages/contact";
import AboutMe from "./pages/about";


function Apple() {
  const [count, setCount] = useState(0)

 
  return (
    <BrowserRouter>
      <section className="w-full h-auto relative">
        {/* navigation */}
        <nav className=" text-white bg-black sticky top-0 flex justify-between px-3 py-5 lg:rounded-2xl lg:mx-36 lg:p-5">
          <h1 className="font-extrabold text-red-600 hover:text-red-300  text-2xl self-center  ">
            sheriff
          </h1>

          {/* to display in smaller screen*/}
          <ul className=" lg:hidden flex  justify-end w-[50%] gap-3 text-[16px] ">
            <Link className="hover:text-gray-300 self-center" to="/about">
              <FaPortrait />
            </Link>{" "}
            <Link
              className="text-red-400 hover:text-red-300  self-center"
              to="/contact"
            >
              <FaPhone />
            </Link>
            <Link className="hover:text-gray-300 self-center" to="/">
              <BiHomeSmile />
            </Link>{" "}
          </ul>

          {/* to display in larger screen*/}
          <ul className="hidden lg:flex  justify-end w-[50%] gap-8 text-[16px] ">
            <Link className="hover:text-gray-300" to="/">
              Home
            </Link>{" "}
            <Link className="hover:text-gray-300" to="/project">
              project
            </Link>{" "}
            <Link className="hover:text-gray-300" to="/about">
              about
            </Link>{" "}
            <Link className="text-red-400 hover:text-red-300 " to="/contact">
              contact me
            </Link>
          </ul>
        </nav>

        {/* routes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactbutton" element={<ContactPage />} />
          <Route path="/viewprojectbutton" element={<ProjectPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <FooterSection />
      </section>
    </BrowserRouter>
  );
}










export default Apple;
