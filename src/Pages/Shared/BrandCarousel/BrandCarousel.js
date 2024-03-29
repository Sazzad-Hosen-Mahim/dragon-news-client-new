import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/brands/Branding.jpg.webp";
import Brand2 from "../../../assets/brands/tumblr_o05v3eZmyT1ugn1wu_og_1280-1080x675.png";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
