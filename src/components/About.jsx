import style from "./About.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false, 
    });
  }, []);

  return (
    <div className={style.aboutSection}>
      <div className={style.aboutIntro}>
        <div className={style.h1}>
          <h1>Who We Are? </h1>
        </div>
        <div className={style.hr}></div>
        <div className={style.p}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            obcaecati dignissimos quae quo ad iste ipsum officiis deleniti
            asperiores sit.
          </p>
        </div>
      </div>
      <div className={style.ourAbout}>
        <div className={style.about} data-aos="fade-right">
          <div className={style.abtText}>
            <h2>Building Trust Through Technology <FontAwesomeIcon icon={faRobot} style={{color: "blue"}}/> </h2>
            <p>AzaPay revolutionizes financial transactions with cutting-edge security and seamless user experience, ensuring your money is managed safely and efficiently. Trust us with your financial journey.</p>
          </div>
          <div className={style.abtContact}>
            <a href="#"> <FontAwesomeIcon icon={faHome} className="icon"/><p>Vestibulum nulla libero, convallis, tincidunt suscipit diam, DC 2002</p></a>
            <a href="#"><FontAwesomeIcon icon={faMailBulk} className="icon"/><p>exampledomain@domain.com</p></a>
            <a href="#"><FontAwesomeIcon icon={faPhone} className="icon"/><p>+234 814 066 7101</p></a>
          </div>
        </div>
        <div className={style.mockup} data-aos='fade-left' >
          <img src="./thumb-1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
