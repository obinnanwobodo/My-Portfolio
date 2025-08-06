import React from 'react'
import styles from './Contact.module.css'
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";

const Contact = () => {
    return (
        <div className={styles.contactgen}>

            <div className={styles.firsthandp}>

                <h1>Get In Touch</h1>
                <p>I'm always open to discussing new opportunities, interesting projects, or just having <br /> <span className={styles.span}>a conversation about technology</span></p>
            </div>

            <div className={styles.secondhandp}>
                <h1>Let's Connect</h1>
                <p>Whether you have a project in mind, want to collaborate, or just <br />want to say hello, I'd love to hear from you. Feel free to reach out <br />through any of the channels below.</p>
            </div>
            <div className={styles.boxgen}>
                <div className={styles.boxes1}>

                    <div className={styles.no1}>
                        <FiMail />
                        <div>
                            <h1>Email</h1>
                            <a href="mailto: obinnanwobodo27@gmail.com">obinnanwobodo27@gmail.com</a>
                        </div>

                    </div>


                    <div className={styles.no2}>
                        <IoCallOutline />
                        <div>
                            <h1>Phone</h1>
                            <a href="tel: +234 902 498 2829">+234 902 498 2829</a>
                        </div>
                    </div>

                    <div className={styles.no3}>
                        <CiLocationOn />
                        <div>
                            <h1>Location</h1>
                            <p>Available for Remote Work</p>
                        </div>

                    </div>
                </div>

                <div className={styles.followndready}>

                    <div className={styles.follow}>
                        <h1>Follow Me</h1>
                        <div className={styles.socialimg}>
                            <a href="https://github.com/obinnanwobodo" target="_blank" rel="noopener noreferrer" className={styles.social1} > <LuGithub /> </a>


                            <a href="https://www.linkedin.com/in/obinna-nwobodo-088413377" target='_blank' rel='noopener noreferrer' className={styles.social2}><FiLinkedin /></a>
                        </div>
                    </div>



                    <div className={styles.box2}>
                        <h1>Ready to Work Together?</h1>
                        <p>I'm currently available for freelance projects and full-time <br />opportunities. Let's discuss how we can bring your ideas to life.</p>

                        <button className={styles.btn1}>
                            <FiMail />
                            <h2>Send Me an Email</h2>
                        </button>

                        <button className={styles.btn2}>
                            <FiLinkedin />
                            <h2>Connect on LinedIn</h2>
                        </button>

                        <h3>Response time: Usually within 24 hours</h3>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Contact
