import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

import './App.css'

// components
import Hero from './components/Hero'
import ServiceSection from "./components/Service";
import ProjectsSection from "./components/project";
import SkillsSection from "./components/Skills";
import FooterSection from "./components/Footer";

//pages
import Home from './pages/Home'
import ProjectPage from "./pages/project";

function App() {
  const [count, setCount] = useState(0)

  const images = [
    {
      image: "darkA.jpg",
    },
    {
      image: "darkB.jpg",
    },
    
    {
      image: "darkc.jpg",
    },
  ];

  return (
    <section className="w-full h-auto relative">
      <nav className=" text-white bg-black sticky top-0 flex justify-between  lg:rounded-2xl lg:p-5 lg:px-40">
        <h1 className="font-extrabold text-red-600 hover:text-red-300  text-2xl self-center  ">
          sheriff
        </h1>
        <ul className="hidden lg:flex self-center  justify-end items-center p-2 w-[50%] gap-8 text-[16px] font-bold">
          <li className="hover:text-gray-300 ">service</li>
          <li className="hover:text-gray-300">project</li>
          <li className="hover:text-gray-300">about</li>
          <li className="text-red-400 hover:text-red-300  ">
            contact
          </li>
        </ul>
      </nav>

      <Home />
      <FooterSection />
    </section>
  );
}










export default App
