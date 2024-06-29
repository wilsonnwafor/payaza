import styles from"./Features.module.css";
import { useEffect } from "react";
import AOS from "aos"
import 'aos/dist/aos.css';

const Features = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
      mirror: true,
    });
  }, []);

  return (
    <section className={styles.features}>
      <div className={styles.featuresIntro}>
        <div className={styles.h1}>
          <h1>What Makes AzaPay different? </h1>
        </div>
        <div className={styles.hr}></div>
        <div className={styles.p}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p>
        </div>
      </div>
      <div className={styles.ourFeatures}>
        <div className={styles.row}>
          <div className={styles.featuresBox} data-aos="zoom-in">
            <div className={styles.featuresIcon}>
              <img src="./layers.png" alt="" />
            </div>
            <div className={styles.featuresText}>
              <h2>
                Fully functional
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.    
              </p>
            </div>
          </div>
          <div className={styles.featuresBox} data-aos="fade-left">
            <div className={styles.featuresIcon}>
              <img src="./lock.png" alt="" />
            </div>
            <div className={styles.featuresText}>
              <h2>
                Secure Data
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.    
              </p>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.featuresBox} data-aos="fade-left">
            <div className={styles.featuresIcon}>
              <img src="./speak.png" alt="" />
            </div>
            <div className={styles.featuresText}>
              <h2>
                Live Chat
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.    
              </p>
            </div>
          </div>
          <div className={styles.featuresBox} data-aos="fade-left">
            <div className={styles.featuresIcon}>
              <img src="./support.png" alt="" />
            </div>
            <div className={styles.featuresText}>
              <h2>
                Easy to Customize
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.    
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
