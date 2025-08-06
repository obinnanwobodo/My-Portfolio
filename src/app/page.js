import Image from "next/image";
import Navbar from "@/Components/Navbar/Navbar";
import Hero from "@/Components/Hero/Hero";
import styles from './globals.css';
import About from '../Components/about/About';
import Skills from "@/Components/Skills/Skills";
import Projects from "@/Components/Projects/Projects";
import Contact from "@/Components/Contact/Contact";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <div>

      <div id="navbar">
        <Navbar />

      </div>

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

<div id="projects">
  <Projects/>
</div>
 
 <div id="contact">
  <Contact />
</div>

<div id="">
  <Footer />
</div>
    </div>
  );
}
