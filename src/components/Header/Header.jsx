import { useState, useEffect } from "react";
import logo from "../../assets/icons/logo.png";
import menu from "../../assets/icons/Menu.svg";
import close from "../../assets/icons/Close.svg";
import "../../styles/Header/Header.scss";
import vk from "../../assets/icons/VK com.svg";
import tg from "../../assets/icons/Telegram.svg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Выносим закрытие за пределы if, чтобы оно точно сработало
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth < 1400;

  const handleCloseMenu = (e) => {
    if (e) e.stopPropagation();
    setIsOpen(false);
  };

  // Обработчик клика по пунктам меню
  const handleMenuItemClick = (e, sectionId) => {
    e.preventDefault();
    e.stopPropagation(); // Останавливаем всплытие
    handleScroll(sectionId);
  };

  return (
    <>
      {isMobile ? (
        <div className="burger">
          <img src={menu} alt="burger" onClick={() => setIsOpen(true)} />
          {isOpen && (
            <div className="burger-menu">
              <nav>
                <ul>
                  <li>
                    <a
                      href="#home"
                      onClick={(e) => handleMenuItemClick(e, "home")}
                    >
                      Главная
                    </a>
                  </li>
                  <li>
                    <a
                      href="#menu"
                      onClick={(e) => handleMenuItemClick(e, "menu")}
                    >
                      Меню
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mero"
                      onClick={(e) => handleMenuItemClick(e, "mero")}
                    >
                      Мероприятия
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contacts"
                      onClick={(e) => handleMenuItemClick(e, "contacts")}
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="burger-socials">
                <a href="https://t.me/police_family">
                  <img src={tg} alt="tg" />
                </a>
                <a href="https://vk.com/policeclubspb">
                  <img src={vk} alt="vk" />
                </a>
              </div>
              <img src={close} alt="close" onClick={handleCloseMenu} />
            </div>
          )}
        </div>
      ) : (
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
          <button onClick={() => handleScroll("reservation")}>
            Забронировать
          </button>
        </header>
      )}
    </>
  );
}

export default Header;
