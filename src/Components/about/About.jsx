import React from 'react'
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.aboutgeneral}>

            <h1 className={styles.abtme}>About Me</h1>

            <div className={styles.pndbox}>
                <p>I'm a passionate Full Stack Engineer with expertise in modern  <br /> web technologies. I love building applications that solve real- <br />world problems and provide exceptional user experiences. <br />

                    My journey in web development started with a curiosity for how <br /> things work behind the scenes. Today, I work with cutting-edge <br />technologies to create scalable, efficient, and beautiful <br />applications. <br />

                    When I'm not coding, you can find me exploring new <br /> technologies, contributing to open-source projects, or sharing <br />knowledge with the developer community.</p>

<div className={styles.boxes}>

                <div className={styles.box1}>
                    <h1> 1+ </h1>
                    <p>Years Experience</p>
                </div>

                <div className={styles.box2}>
                    <h1> 10+ </h1>
                    <p>Projects Completed</p>
                </div>

                <div className={styles.box3}>
                    <h1> 10+ </h1>
                    <p>Technologies</p>
                </div>

                <div className={styles.box4}>
                    <h1> 100% </h1>
                    <p>Client Satisfaction</p>
                </div>
</div>

            </div>
        </div>
    )
}

export default About
