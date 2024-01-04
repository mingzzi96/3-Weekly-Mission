import { Link } from "react-router-dom";
import "./Footer.css";

const footerSns = ["facebook", "twitter", "youtube", "instagram"];

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-ttl">
        <span>©codeit - 2023</span>
      </div>
      <div className="Footer-link">
        <a href="./privacy.html" target="_blank">
          Privacy Policy
        </a>
        <a href="./faq.html" target="_blank">
          FAQ
        </a>
      </div>
      <div className="Footer-sns">
        {footerSns.map((item) => {
          return (
            <Link to={`https://www.${item}.com`} target="_blank">
              <img src={`./assets/images/${item}.png`} alt={item} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
