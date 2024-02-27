import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/public/assets/images/icons/facebook.png";
import twitterIcon from "@/public/assets/images/icons/twitter.png";
import youtubeIcon from "@/public/assets/images/icons/youtube.png";
import instagramIcon from "@/public/assets/images/icons/instagram.png";
import { usePathname } from "next/navigation";

const footerSns = ["facebook", "twitter", "youtube", "instagram"];
const footerSnsImg = [facebookIcon, twitterIcon, youtubeIcon, instagramIcon];

const Footer = () => {
  const pathname = usePathname();

  return pathname === "/signin" || pathname === "/signup" ? null : (
    <footer className={styles.footer}>
      <div className={styles.footerTitle}>
        <span>©codeit - 2023</span>
      </div>
      <div className={styles.footerLink}>
        <Link href="./privacy.html" target="_blank">
          Privacy Policy
        </Link>
        <Link href="./faq.html" target="_blank">
          FAQ
        </Link>
      </div>
      <div className={styles.footerSns}>
        {footerSns.map((item, index) => {
          return (
            <Link href={`https://www.${item}.com`} target="_blank" key={index}>
              <Image src={footerSnsImg[index]} alt={item} />
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
