import React from 'react'
import Image from 'next/image'
import styles from './Projects.module.css';
import buffer from '../../../public/images/Screenshot 2025-08-01 105806.png';
import edu from '../../../public/images/WhatsApp_Image_2025-08-01_at_17.52.17_faf5ff87-removebg-preview.png';
import bball from '../../../public/images/Screenshot 2025-08-01 120138.png';
import { FaExternalLinkAlt } from "react-icons/fa";



const arrays = [
    {
        id: 'B-ball',
        bgColor: '#101219',
        imageSrc: bball,
        alt: "Basketball Image",
        title: "B-ball",
        description: "A real-time basketball live score application that provides up-to-date game statistics, player performance data,\n and live match updates. Built with modern web technologies \nfor seamless user experience.",
        features: ['Player & Team Stats', 'Real-time Score Updates', 'Match Schedule & Results', 'Recent & Upcoming Games'],
        technologies: ['React', 'Next.js', 'CSS', 'Javascript'],
        link: "https://b-ball-tan.vercel.app/"
    },


    {
        id: 'Edu',
        bgColor: '#101219',
        imageSrc: edu,
        alt: "Edu Portal Image",
        title: "Edu-Portal",
        description: "An educational portal platform that streamlines learning management with\n course creation, student enrollment, progress tracking, and interactive \ncontent delivery for educational institutions.",
        features: ['Course management', 'Fees Payment', 'results and performance reports', 'School News & Updates'],
        technologies: ['React', 'Next.js', 'CSS', 'Javascript'],
        link: "https://edu-portal-code.vercel.app/"
    },


    {
        id: 'Buffer',
        bgColor: '#101219',
        imageSrc: buffer,
        alt: "Buffer Image",
        title: "Buffer  ",
        description: "A social media management tool that allows users to create, schedule\n and share content across multiple platforms to grow their audience \norganically. ",
        features: ['Content Scheduling & Publishing', 'Analytics & Reporting', 'Multi-platform support', 'Team Collaboration'],
        technologies: ['React', 'Next.js', 'CSS', 'Javascript'],
        link: "https://buffer-mu.vercel.app/"
    },



]



const Projects = () => {
    return (
        <div className={styles.projectgen}>

            <h1 className={styles.fph1}>Featured Projects </h1>
            <p className={styles.desp}>Here are some of the projects I've worked on that showcase my skills and expertise</p>

            <div className={`${styles.mappinggen}`} >
                {arrays.map((each, index) => (

                    <div key={each.id} className={`${styles.stylingofmapping} ${index === 0 ? styles.firsmapgrp
                                : index === 1
                                    ? styles.secondmapgrp
                                    : index === 2
                                        ? styles.thirdmapgrp
                                        : ''
                            }`} style={{ backgroundColor: each.bgColor }}>
                        <div className={`${styles.images} ${index === 0
                                ? styles.firsimagebg
                                : index === 1
                                    ? styles.secondimagebg
                                    : index === 2
                                        ? styles.thirdimagebg
                                        : ''
                            }`} >
                            <Image src={each.imageSrc} alt={each.alt} className={styles.projectImage} />    </div>

                        <div className={`${styles.texts} ${ index === 0 ? styles.firstTextGroup : '' }`}>

                            <h1 className={styles.title}>{each.title}</h1>
                            <p className={styles.description}>
                                {each.description.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}
                            </p>

                            <h2 className={styles.kf}>Key Features:</h2>
                            <ul className={styles.featuresList}>
                                {each.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>


                            <h2 className={styles.technologies}>Technologies:</h2>
                            <div className={styles.techList}>
                                {each.technologies.map((tech, i) => (
                                    <span key={i} className={styles.eachtechitem}>{tech}</span>
                                ))}
                            </div>

                            <div className={styles.iconbut}>
                                <FaExternalLinkAlt />
                                <a href={each.link} target='blank' rel='noopener noreferrer' className={styles.buttonl}>View Live Site</a>
                            </div>


                        </div>

                    </div>




                ))}

            </div>


        </div>
    )
}

export default Projects
