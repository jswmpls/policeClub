import "../../styles/Footer/Footer.scss";

import vk from "../../assets/icons/VK com.svg";
import tg from "../../assets/icons/Telegram.svg";

function Footer() {
  return (
    <div className="footer">
      <p>Police Club 2026</p>
      <div className="footer-socials">
        <a href="https://t.me/police_family">
          <img src={tg} alt="tg" />
        </a>
        <a href="https://vk.com/policeclubspb">
          <img src={vk} alt="vk" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
