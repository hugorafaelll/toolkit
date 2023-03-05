import React from "react";
import SlickSlider from "react-slick";
import "./slick.css";
import "./slick-theme.css";



const sliderSettings = {
  dots: "true",
  infinite: "true",
  speed: 500,
  slidesToShow: 1,
  autoplay: "true",
  autoplaySpeed: 2000,
  slidesToScroll: 1,
};


const Slider = () => (
  <SlickSlider {...sliderSettings}>
    <img src={"https://cdn.dooca.store/3148/files/banner-dunk.png?v=1629566692&webp=0"} alt="Image 2" />
    <img src={"https://cdn.dooca.store/3148/files/banner-nike-jordan.png?v=1629051144&webp=0"} alt="Image 3" />
    <img src={"https://cdn.dooca.store/3148/files/banner-dunk.png?v=1629566692&webp=0"} alt="Image 6" />
  </SlickSlider>
);

const Carrosel = () => (
  <div>
    <Slider />
  </div>
);

export default Carrosel;
