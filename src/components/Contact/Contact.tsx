import React from "react";
import "../../styles/Contact/Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <h1>Контакты</h1>
      <div className="contact-info">
        <p className="contact-info__descr">
          <span className="pink-text">Адрес:</span> <br />
          6-я Красноармейская, <br /> 1 ст.м. Технологический институт
          <br />
          <br />
          <span className="pink-text">Режим работы:</span>
          <br /> Понедельник - Воскресенье 20:00 - 06:00
          <br />
          <br />
          <span className="pink-text">Пишите в Telegram или Max:</span>
          <br />
          <a href="tel:+7(906)-257-47-97">+7(906)-257-47-97</a>
        </p>
        <div className="contact-info__map">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.317389%2C59.912530&z=16&pt=30.317389%2C59.912530&whatshere%5Bpoint%5D=30.317389%2C59.912530&whatshere%5Bzoom%5D=17"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Яндекс.Карты"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
