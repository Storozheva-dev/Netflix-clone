import css from "./Home.module.css";
import React from "react";
import NavBar from "../../NavBar/NavBar";
import HeroBanner from "../../../assets/hero_banner.jpg";
import HeroTitle from "../../../assets/hero_title.png";
import PlayIcon from "../../../assets/play_icon.png";
import InfoIcon from "../../../assets/info_icon.png";
import TitleCards from "../../TitleCards/TitleCards";
import Footer from "../../Footer/Footer";
const Home = () => {
  return (
    <div className={css.home}>
      <NavBar />
      <div className={css.hero}>
        <img src={HeroBanner} alt="Hero Banner" className={css.bannerIMG}></img>
        <div className={css.heroCaption}>
          <img
            src={HeroTitle}
            alt="Hero Caption"
            className={css.CaptionImg}
          ></img>
          <p className={css.heroCaptionText}>
            Discovering his ties to a secret ancien order, a young man living in
            modern Istanbul embarks on quest to save the city from an immortal
            enemy.
          </p>
          <div className={css.heroBtns}>
            <button className={css.btn}>
              <img src={PlayIcon} alt="Play"></img>
              <span>PLAY</span>
            </button>
            <button className={css.btnDark}>
              <img
                src={InfoIcon}
                alt="More Info"
                className={css.iconDark}
              ></img>
              <span>INFO</span>
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className={css.moreCards}>
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
