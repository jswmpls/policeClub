import logo from "../../assets/icons/logo.png";
import "../../styles/Header/Header.scss";

function Header() {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
          >
            Главная
          </a>
        </li>
        <li>
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("menu");
            }}
          >
            Меню
          </a>
        </li>
        <li>
          <a
            href="#mero"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("mero");
            }}
          >
            Мероприятия
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contacts");
            }}
          >
            Контакты
          </a>
        </li>
      </ul>
      <button onClick={() => handleScroll("reservation")}>Забронировать</button>
    </header>
  );
}

export default Header;
