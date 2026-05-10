import img1 from "../../assets/image/banner/1.jpg";
import img2 from "../../assets/image/banner/2.jpg";
import img3 from "../../assets/image/banner/3.jpg";
import img4 from "../../assets/image/banner/4.jpg";
import img5 from "../../assets/image/banner/5.jpg";
import img6 from "../../assets/image/banner/6.jpg";
import img7 from "../../assets/image/banner/7.jpg";
import "../../styles/Banner/Banner.scss";

import { useState, useEffect } from "react";

const images = [img1, img2, img3, img4, img5, img6, img7];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="banner">
      <img src={images[currentIndex]} alt="image" />
    </div>
  );
}

export default Banner;
