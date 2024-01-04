import { Link } from "react-router-dom";
import "./Footer.css";

const footerSns = [
  {
    link: "https://www.facebook.com/",
    name: "facebook",
  },
  {
    link: "https://www.twitter.com/",
    name: "twitter",
  },
  {
    link: "https://www.youtube.com/",
    name: "youtube",
  },
  {
    link: "https://www.instagram.com/",
    name: "instagram",
  },
];

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
            <Link to={item.link} target="_blank">
              <img src={`./assets/images/${item.name}.png`} alt={item.name} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
