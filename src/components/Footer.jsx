import style from "./Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-scroll";

const Footer = () =>{

  const currentYear = new Date().getFullYear();

  return(
    <footer>
      <div className={style.footerLinks} >
        <div className={style.footerLogo}>
          <Link to="home" smooth={true} duration={500}>
            <img src="/logo.png" alt="" />
          </Link>
        </div>
        <div className={style.social}>
          <h3>Social Links</h3>
          <p>
            Follow us on social media to learn more and connect with us.
          </p>
          <div className={style.socialLinks}>
            <a href="https://x.com" target="blank">
              <FontAwesomeIcon icon={faXTwitter} className={style.icon}/>
              <p>Twitter</p>
            </a>
            <a href="https://facebook.com" target="blank">
              <FontAwesomeIcon icon={faFacebook} className={style.icon2}/>
              <p>Facebook</p>
            </a>
            <a href="https://instagram.com" target="blank">
              <FontAwesomeIcon icon={faInstagram} className={style.icon3}/>
              <p>Instagram</p>
            </a>
            <a href="https://linkedin.com" target="blank">
              <FontAwesomeIcon icon={faLinkedin} className={style.icon2}/>
              <p>LinkedIn</p>
            </a>
          </div>
        </div>
        <div className={style.help}>
          <h3>Product Help</h3>
          <ul>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>FAQs</Link>
            </li>
          </ul>
        </div>
        <div className={style.download}>
          <h3>Download</h3>
          <a href="#">
            <img src="/google-play-black.png" alt="" />
          </a>
          <a href="#">
            <img src="/app-store-black.png" alt="" />
          </a>
        </div>
      </div> 
      <div className={style.hr}></div>
      <div className={style.copyright}>
        <p>&copy; {currentYear} <b>AzaPay</b>. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer;  