import "../../styles/Reservation/Reservation.scss";
import ReservationCard from "./ReservationCard.jsx";

import glitter1 from "../../assets/icons/glitter.png";
import glitter2 from "../../assets/icons/glitter2.png";
import place from "../../assets/icons/Помщение.svg";

function Reservation() {
  return (
    <div className="reservation">
      <h1>ЗАБРОНИРОВАТЬ СТОЛ</h1>
      <div className="reservation-info">
        <img src={place} alt="place" />
        <div className="reservation-info__card">
          <ReservationCard
            title="БЕСПЛАТНЫЙ ВХОД"
            descr="ДО 00:00"
            img={glitter1}
          />
          <ReservationCard
            title="ВХОД 200 ₽"
            descr="ПОСЛЕ 00:00"
            img={glitter2}
          />
        </div>
      </div>
      <button>Забронировать</button>
    </div>
  );
}

export default Reservation;
