import "../../styles/Mero/MeroCard.scss";

function MeroCard({ img, dates }) {
  return (
    <div className="mero-card">
      <img src={img} alt="img" />
      <p>{dates}</p>
    </div>
  );
}

export default MeroCard;
