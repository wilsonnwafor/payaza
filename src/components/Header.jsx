import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleClick = () =>{
    setIsMenuOpen(!isMenuOpen);
  }
  const handleChange = () => {
    setIsMenuOpen(false);
  }

  
  return (
    <>
      <header className={`${styles.navbar} ${ scroll ? styles.scrolled : ""}`}>
        <div className={styles.navbarInner}>
          <Link className={styles.navbarBrand} to="home" smooth={true} duration={500}>
            <img src="/logo-white.png" alt="logo" />
          </Link>
          <div className={styles.navigation}>
            <nav>
              <ul className={`${styles.navbarNav} ${isMenuOpen ? styles.clicked : ''}`}>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} to="home" smooth={true} duration={500} onClick={handleChange}>
                    Home
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} to="features" smooth={true} duration={500} onClick={handleChange}>
                    Features
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.navLink} to="about" smooth={true} duration={500} onClick={handleChange}>
                    About
                  </Link>
                </li>
                {/* <li className={styles.navItem}>
                  <Link className={styles.navLink} to="contact" smooth={true} duration={500} onClick={handleChange}>
                    Contact
                  </Link>
                </li> */}
              </ul>
            </nav>
            <div className={`${styles.hamMenu} ${isMenuOpen ? styles.clicked : ''}`} onClick={handleClick}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
