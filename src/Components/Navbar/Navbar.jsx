'use client'

import Link from 'next/link'
import styles from './Navbar.module.css';
import React, { useState  } from 'react'

const Navbar = () => {

 const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  return (
    <div className={styles.wrapper}>
    <div className={`${styles.gennav}`}>

      <h1>Portfolio</h1>
      
       {/* Hamburger icon for mobile */}
<div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>

{/* THIS IS WHAT WILL SHOW BY DEFAULT EXCEPT I DO DISPLAY NONE UNDER RESPONSIVNESS FOR PHONJE SCREEN */}
     <div className={`${styles.haspc} ${menuOpen ? styles.show : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>


    </div>
    </div>
  )
}

export default Navbar
