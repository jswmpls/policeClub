import "../../styles/Reservation/ReservationCard.scss";

function ReservationCard({ title, descr, img }) {
  return (
    <div className="card">
      <div className="card__title">
        <h2>{title}</h2>
        <p className="pink-text">{descr}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default ReservationCard;
