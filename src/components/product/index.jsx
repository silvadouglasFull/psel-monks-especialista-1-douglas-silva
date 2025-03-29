import React from "react";
import Card from "../card";
import img from "@/assets/imgs/product.png";
import hightlight from "@/assets/imgs/hightlight.png";
const ProductWithImgAndText = () => {
  return (
    <Card>
      <Card.Image
        style={{
          padding: ".5rem",
        }}
        src={img}
        alt="Imagem do Card"
      />
      <Card.Body>
        <Card.Title>Lorem ipsum dolor</Card.Title>
        <Card.Text>Lorem ipsum dolor sit amet consectetur.</Card.Text>
      </Card.Body>
    </Card>
  );
};
const ProductWithImg = (props) => {
  return (
    <Card {...props}>
      <Card.Image
        {...props}
        src={props.img ? img : hightlight}
        alt="Imagem do Card"
      />
    </Card>
  );
};
export { ProductWithImgAndText, ProductWithImg };
