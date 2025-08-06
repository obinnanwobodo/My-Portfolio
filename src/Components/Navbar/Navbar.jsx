import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={`${styles.gennav}`}>

<h1>Portfolio</h1>

<div className={`${styles.haspc}`}>
<a href='#home'>Home</a>
<a href='#about'>About</a>
<a href='#skills'>Skills</a>
<a href='#projects'>Projects</a>   
<a href='#contact'>Contact</a>   
</div>

    </div>
  )
}

export default Navbar
