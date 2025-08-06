import React from 'react'
import styles from './Hero.module.css';
import { GrDown } from "react-icons/gr";
import Image from 'next/image';
import fotis from '../../../public/images/fotis-fotopoulos-SyvsTmuuZyM-unsplash.jpg'

const Hero = () => {
  return (    
  <div>
    <Image src={fotis } alt='background image' className={styles.herobgimg}/>
  
  <div className={styles.overlay}></div>
  
    <div className={styles.heroContent}>
      <h1>
        Hi, I'm <span className={styles.obinna}>Obinna</span>
      </h1>
      <h2>Full Stack Engineer</h2>
      <p>
        Passionate about creating exceptional web experiences with modern technologies. <br />
        Specializing in React, TypeScript, Node.js, and building responsive, user-friendly applications that make a difference.
      </p>

      <div className={styles.buttons}>
        <a href="#projects">  <button  className={styles.btn1} >View My Work</button > </a>
        <a href="#contact"> <button className={styles.btn2}>Get In Touch</button> </a>
        
      </div>
      
      <div className={styles.scrolldown}>
        <a href="#about"><GrDown /></a>
      </div>
    </div>
</div>
  )
}

export default Hero
