import React, { useRef, useEffect } from "react";
import css from "./TitleCards.module.css";
import CardsData from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className={css.titleCards}>
      <h2 className={css.title}>{title ? title : "Popular on Netflix"}</h2>
      <ul className={css.cardList} ref={cardsRef}>
        {CardsData.map((card, index) => {
          return (
            <li className={css.card} key={index}>
              <img src={card.image} alt={card.name} />
              <p>{card.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TitleCards;
