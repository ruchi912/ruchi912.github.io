import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import temple_Pic_1 from "./../assets/temple_Pic_1.png";
import temple_Pic_2 from "./../assets/temple_Pic_2.png";
import temple_Pic_3 from "./../assets/temple_Pic_3.jpg";
import temple_Pic_4 from "./../assets/temple_Pic_4.jpg";
const Slider = (props) => {
  return (
    <Carousel
      axis="horizontal"
      showArrows={true}
      showStatus={false}
      showIndicators={true}
      infiniteLoop={true}
      showThumbs={false}
      useKeyboardArrows={true}
      autoPlay={true}
      stopOnHover={true}
      swipeable={true}
      dynamicHeight={true}
      emulateTouch={true}
    >
      <div>
        <img style={{ width: "100%", height: "400px" }} src={temple_Pic_3} />
      </div>
      <div>
        <img style={{ width: "100%", height: "400px" }} src={temple_Pic_1} />
      </div>

      <div>
        <img style={{ width: "100%", height: "400px" }} src={temple_Pic_4} />
      </div>
    </Carousel>
  );
};

export default Slider;
