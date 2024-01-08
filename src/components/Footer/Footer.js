import { Link } from "react-router-dom";
import "./Footer.css";

const footerSns = ["facebook", "twitter", "youtube", "instagram"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-ttl">
        <span>©codeit - 2023</span>
      </div>
      <div className="footer-link">
        <Link to="./privacy.html" target="_blank">
          Privacy Policy
        </Link>
        <Link to="./faq.html" target="_blank">
          FAQ
        </Link>
      </div>
      <div className="footer-sns">
        {footerSns.map((item, index) => {
          return (
            <Link to={`https://www.${item}.com`} target="_blank" key={index}>
              <img src={`./assets/images/icons/${item}.png`} alt={item} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
