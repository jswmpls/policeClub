import "../../styles/Mero/Mero.scss";
import MeroCard from "./MeroCard.jsx";

import img1 from "../../assets/image/mero/1.png";
import img2 from "../../assets/image/mero/2.png";
import img3 from "../../assets/image/mero/3.png";

function Mero() {
  return (
    <div className="mero">
      <h1>МЕРОПРИЯТИЯ</h1>
      <div className="mero__cards">
        <MeroCard img={img1} dates="08.05, 09.05, 10.05" />
        <MeroCard img={img2} dates="01.05, 02.05" />
        <MeroCard img={img3} dates="10.04, 11.04" />
      </div>
    </div>
  );
}

export default Mero;
