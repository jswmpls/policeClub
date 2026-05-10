import "../../styles/Menu/MenuCard.scss";
import arrow from "../../assets/icons/arrow.svg";

function MenuCard({ img, title, url }) {
  return (
    <div className="menu-card">
      <a href={url}>
        <div className="menu-card__info">
          <div className="menu-card__info-title">
            <h1>{title}</h1>
            <p className="pink-text">МЕНЮ</p>
          </div>
          <img src={arrow} alt="arrow" />
        </div>
        <img src={img} alt="image" />
      </a>
    </div>
  );
}

export default MenuCard;
