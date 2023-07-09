import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <p>Nazawa firmy - wszelkie prawa zastrzeżone, 2023</p>
        <ul className="icons-list">
          <li>
            <a href="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="fb-icon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
