import React from 'react'
import styles from './Skills.module.css'
import { PiBracketsAngleBold } from "react-icons/pi";
import { LuServer } from "react-icons/lu";
import { IoServerOutline } from "react-icons/io5";
import { FiGlobe } from "react-icons/fi";




const eachSkills = [
    {
        tag: 1,
        name: 'React',
        level: 95,
    },

    {
        tag: 2,
        name: 'HTML',
        level: 95,
    },


    {
        tag: 3,
        name: 'Pure CSS',
        level: 95,
    },

    {
        tag: 4,
        name: 'JavaScript',
        level: 90,
    },

    {
        tag: 5,
        name: 'Node.js',
        level: 90,
    },

    {
        tag: 6,
        name: 'Next.js API Routes',
        level: 90,
    },

    {
        tag: 7,
        name: 'PostgreSQL',
        level: 90,
    },

    {
        tag: 8,
        name: 'next.js',
        level: 95,
    },


]






const Skills = () => {
    return (
        <div className={styles.skillsgen}>

            <h1 className={styles.st}>Skills & Technologies</h1>
            <p className={styles.stp}>Here are the technologies and tools I use to bring ideas to life</p>

            <div className={styles.boxes}>

                <div className={styles.box1}>
                    <PiBracketsAngleBold />
                    <h1>Frontend <br />Development</h1>

                    <li>React</li>
                    <li>HTML</li>
                    <li>Tailwind CSS</li>
                    <li>Pure CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>

                </div>


                <div className={styles.box2}>
                    <LuServer />
                    <h1>Backend <br />Development</h1>

                    <li>Node.js</li>
                    <li>REST APIs</li>
                    <li>Next.js API Routes</li>
                    <li>Express.js</li>
                    <li>Prisma</li>
                </div>


                < div className={styles.box3}>
                    <IoServerOutline />
                    <h1>Database & Storage</h1>

                    <li>PostgreSQL</li>
                    <li>MongoDB</li>

                </div>


                <div className={styles.box4}>
                    <FiGlobe />
                    <h1>Frameworks & Tools</h1>

                    <li>Next.js</li>
                    <li>Git </li>
                    <li>GitHub</li>
                    <li>Vercel</li>
                    <li>Visual Studio Code</li>
                    <li>Postman</li>
                </div>


            </div>

            <div className={styles.Proficiencygen}>
                <h1 className={styles.profh1}>Proficiency Levels</h1>

                <div className={styles.Proficiencygroups}>
                    {eachSkills.map((skills, index) => (

                        <div className={styles.eachset} key={index}>

                            <div className={styles.each}>
                                <span className={styles.name}>{skills.name}</span>
                                <span className={styles.level}>{skills.level}%</span>
                            </div>

                            <div className={styles.progressbar}>
                                <div className={styles.progress} style={{ width: `${skills.level}%` }} ></div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Skills
