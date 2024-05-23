import React from "react";
import "./ImageCard.scss";
const Card = (props) => (
  <div className="card">
    <img src={props.imgUrl} alt={props.alt || "Image"} />
    <div className="card-content">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  </div>
);

const ImageCard = (props) => {
  return (
    <div className="container">
      <h1 style={{ "text-align": "center" }}></h1>

      <div className="cards-container">
        {props.cards.map((card) => (
          <Card
            title={card.title}
            content={card.content}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
