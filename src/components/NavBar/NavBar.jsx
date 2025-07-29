import css from "./NavBar.module.css";
import React from "react";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search_icon.svg";
import BellIcon from "../../assets/bell_icon.svg";
import ProfileImg from "../../assets/profile_img.png";
import CaretIcon from "../../assets/caret_icon.svg";
import { useRef, useEffect } from "react";
import { logout } from "../../firebase";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      navRef.current.className =
        window.scrollY >= 80 ? `${css.navbar} ${css.navDark}` : css.navbar;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={navRef} className={css.navbar}>
      <div className={css.navbarLeft}>
        <img src={Logo} className={css.navbarLogo} alt="Netflix logo"></img>
        <ul className={css.navbarLinks}>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className={css.navbarRight}>
        <img src={SearchIcon} className={css.icons} alt="Search"></img>
        <p>Children</p>
        <img src={BellIcon} alt="Bell" className={css.icons}></img>
        <div className={css.navbarProfile}>
          <img
            src={ProfileImg}
            alt="Profile"
            className={css.navbarProfileImg}
          ></img>
          <img
            src={CaretIcon}
            alt="Caret"
            className={css.navbarCaretIcon}
          ></img>
          <div className={css.dropdown}>
            <p onClick={logout}>Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
