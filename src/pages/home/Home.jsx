import React, { useState } from "react";
import Slider from "../../components/Slider";
import "./Home.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ImageCard from "../../components/imagecard/ImageCard";
import ganesh_Pic_1 from "./../../assets/ganesh_Pic_1.png";
import shiva_pic_1 from "./../../assets/shiva_pic_1.png";
import temple_Pic_2 from "./../../assets/temple_Pic_2.png";
import rajrajeswardevi_pic_1 from "./../../assets/rajrajeswardevi_pic_1.png";
import logo_devi from "./../../assets/logo_devi.png";
import ReactCardSlider from "react-card-slider-component";
const Home = (props) => {
  const [isScroll, setIsScroll] = useState(false);
  const cardsData = [
    {
      id: 1,
      title: "GANESH JI",
      content: "DONATE",
      imgUrl: ganesh_Pic_1,
    },
    {
      id: 2,
      title: "SHIV JI",
      content: "DONATE",
      imgUrl: shiva_pic_1,
    },
    {
      id: 3,
      title: "MATA JI",
      content: "DONATE",
      imgUrl: temple_Pic_2,
    },
    {
      id: 4,
      title: "DEVI MATA JI",
      content: "DONATE",
      imgUrl: rajrajeswardevi_pic_1,
    },
    // {
    //   id: 5,
    //   title: "CARD 5",
    //   content: "Reed Richards",
    //   imgUrl: "https://unsplash.it/202/200",
    // },
    // {
    //   id: 6,
    //   title: "CARD 6",
    //   content: "Wade Wilson",
    //   imgUrl: "https://unsplash.it/200/199",
    // },
    // {
    //   id: 7,
    //   title: "CARD 7",
    //   content: "Peter Quill",
    //   imgUrl: "https://unsplash.it/199/199",
    // },
    // {
    //   id: 8,
    //   title: "CARD 8",
    //   content: "Steven Rogers",
    //   imgUrl: "https://unsplash.it/199/200",
    // },
    // {
    //   id: 9,
    //   title: "CARD 9",
    //   content: "Bruce Banner",
    //   imgUrl: "https://unsplash.it/200/198",
    // },
    // {
    //   id: 10,
    //   title: "CARD 10",
    //   content: "Vincent Strange",
    //   imgUrl: "https://unsplash.it/198/199",
    // },
  ];

  const sliderClick = () => {};
  const slides = [
    {
      image: "https://picsum.photos/200/300",
      title: "This is a title",
      description: "This is a description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/600/500",
      title: "This is a second title",
      description: "This is a second description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/700/600",
      title: "This is a third title",
      description: "This is a third description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/500/400",
      title: "This is a fourth title",
      description: "This is a fourth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/200/300",
      title: "This is a fifth title",
      description: "This is a fifth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/800/700",
      title: "This is a sixth title",
      description: "This is a sixth description",
      clickEvent: sliderClick,
    },
    {
      image: "https://picsum.photos/300/400",
      title: "This is a seventh title",
      description: "This is a seventh description",
      clickEvent: sliderClick,
    },
  ];

  return (
    <div>
      <Slider />
      <div className="mx-auto text-center">
        <h5 className="section-title px-3"></h5>
        <img style={{ width: "70px", height: "70px" }} src={logo_devi} />
        <h1 className="mb-0 headerTitle">Puja & Donation</h1>
      </div>

      <div className="container">
        <h1 style={{ "text-align": "center" }}></h1>

        <div className="cards-container">
          <ReactCardSlider slides={slides} />
        </div>
      </div>

      <div className="mx-auto text-center">
        <h5 className="section-title px-3"></h5>
        <img style={{ width: "70px", height: "70px" }} src={logo_devi} />
        <h1 className="mb-0 headerTitle">Deities Darshan & Donation</h1>
      </div>
      <ImageCard cards={cardsData} />
    </div>
  );
};

export default Home;
