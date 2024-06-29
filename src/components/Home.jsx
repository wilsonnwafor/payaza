import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
import styles from "./Home.module.css"
import { Link } from "react-scroll";
import { useState,useEffect } from "react";


const Home = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () =>{
    if(window.scrollY > 500){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section id="home" className={styles.home}>
      {/* Welcome Intro Start */}
      <div className={styles.welcomeIntro}>
        <h1>Bank on your smartphone with AzaPay</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Impedit nihil tenetur minus quidem est deserunt molestias
          accusamus harum ullam tempore debitis et, expedita, repellat
          delectus aspernatur neque itaque qui quod.
        </p>
        {/* Store Buttons */}
        <div className={styles.downloadBtns}>
          <a href="#">
            <img src="/google-play-black.png" alt="" />
          </a>
          <a href="#">
            <img src="/app-store-black.png" alt="" />
          </a>
        </div>
        <span style={{fontStyle: "italic", fontWeight: "600"}}>
          * Available on iPhone, iPad and all Android devices
        </span>
      </div>
      <div className={styles.welcomeMockup}  >
        {/* Welcome Thumb */}
        <div className="">
          <img src="/welcome-mockup-2.png"/>
        </div>
      </div>
      {/* Shape Bottom */}
      <div className={styles.shapeBottom}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path class="shape-fill" fill="#FFFFFF" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7  c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4  c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
          </svg>
      </div>
      <Link to="home" smooth={true} duration={500}>
        <div className={`${styles.scrollTop} ${ scroll ? styles.show : ""}`}>
          <FontAwesomeIcon icon={faArrowUp} className={styles.arrow}/>
        </div>
      </Link>
    </section>
  );
};
export default Home;
