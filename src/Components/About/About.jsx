import React from 'react';
import styles from './About.module.css';
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>
        <div className={`${styles.aboutContent} d-grid`}>
          <div className={styles.aboutImg}>
            <img src = {aboutImg} alt = "bookhub about image" />
          </div>
          <div className={`${styles.aboutText} bg-dange`}>
            <h2 className={`${styles.aboutTitle} ${styles.aboutTit}`}>About BookHub</h2>
            <p className={styles.fsfs}>Dive into the world of the greatest playwright of all time with "The Complete Works of William Shakespeare." This digital collection includes all of Shakespeare's plays, sonnets, and poems, along with insightful commentary and analysis from renowned Shakespearean scholars. </p>
            <p className={styles.fsfs}>Whether you're a seasoned scholar or a newcomer to Shakespeare's works, this comprehensive collection is the perfect resource for exploring the timeless themes and characters that continue to captivate audiences today.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
