import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Carousel1 from "../../assets/carousel/photo_1_2024-09-28_19-59-59.jpg";
import Carousel2 from "../../assets/carousel/photo_2_2024-09-28_19-59-59.jpg";
import Carousel3 from "../../assets/carousel/photo_6_2024-09-28_19-59-59.jpg";
import Carousel4 from "../../assets/carousel/photo_7_2024-09-28_19-59-59.jpg";
import { Carouusel } from "./style";

const CartCarousel = () => {
  {
    return (
      <Carousel>
        <div>
          <Carouusel width={"683px"} height={"406px"} src={Carousel2} />
        </div>
        <div>
          <Carouusel width={"683px"} height={"406px"} src={Carousel1} />
        </div>
        <div>
          <Carouusel width={"683px"} height={"406px"} src={Carousel3} />
        </div>

        <div>
          <Carouusel width={"683px"} height={"406px"} src={Carousel4} />
        </div>
      </Carousel>
    );
  }
};
export default CartCarousel;
