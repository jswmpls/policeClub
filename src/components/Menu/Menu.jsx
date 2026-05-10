import "../../styles/Menu/Menu.scss";
import MenuCard from "./MenuCard.jsx";

import eats from "../../assets/icons/eats.png";
import bar from "../../assets/icons/bar.png";

function Menu() {
  return (
    <div className="menu">
      <h1>Меню</h1>
      <div className="menu__cards">
        <MenuCard
          img={eats}
          title="FOOD"
          url="https://i.pinimg.com/originals/c5/ab/b6/c5abb6e7afbc95efeb95cc626274d05f.jpg"
        />
        <MenuCard
          img={bar}
          title="BAR"
          url="https://i.pinimg.com/originals/c5/ab/b6/c5abb6e7afbc95efeb95cc626274d05f.jpg"
        />
      </div>
    </div>
  );
}

export default Menu;
