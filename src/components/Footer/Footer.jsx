import React from "react";
import css from "./Footer.module.css";
import YouTubeIcon from "../../assets/youtube_icon.png";
import FacebookIcon from "../../assets/facebook_icon.png";
import InstagramIcon from "../../assets/instagram_icon.png";
import TwitterIcon from "../../assets/twitter_icon.png";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.footerIcons}>
        <img src={YouTubeIcon} alt="YouTube"></img>
        <img src={FacebookIcon} alt="Facebook"></img>
        <img src={InstagramIcon} alt="Instagram"></img>
        <img src={TwitterIcon} alt="Twitter"></img>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookies Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className={css.copyrightText}> © 1997-2025 Netflix, Inc</p>
    </div>
  );
};

export default Footer;
