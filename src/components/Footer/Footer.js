const Footer = () => {
  return (
    <footer>
      <div className="footer_ttl">
        <span>©codeit - 2023</span>
      </div>
      <div className="footer_link">
        <a href="./privacy.html" target="_blank">
          Privacy Policy
        </a>
        <a href="./faq.html" target="_blank">
          FAQ
        </a>
      </div>
      <div className="footer_sns">
        <a href="https://www.facebook.com/" target="_blank">
          <img src="./assets/images/facebook.png" alt="facebook" />
        </a>
        <a href="https://twitter.com/" target="_blank">
          <img src="./assets/images/twitter.png" alt="twitter" />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <img src="./assets/images/youtube.png" alt="youtube" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img src="./assets/images/instagram.png" alt="instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;