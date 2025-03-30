import React from "react";
import Card from "@/components/card";
import { CardProcution } from "@/components/product/styles";

/**
 * `ProductWithImgAndText` displays a product with both an image and a description.
 *
 * Props:
 * - `description`: The description text of the product.
 * - `name`: The name of the product.
 * - `hight_light_photo_url`: The URL of the image to be displayed.
 */
const ProductWithImgAndText = ({
  description,
  name,
  hight_light_photo_url,
}) => {
  return (
    <CardProcution>
      <Card.Image
        style={{
          padding: ".5rem",
          height: 180,
          margin: "0 auto",
        }}
        src={hight_light_photo_url}
        alt="Product Image"
      />
      <Card.Body
        style={{
          height: 120,
        }}
      >
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </CardProcution>
  );
};

/**
 * `ProductWithImg` displays a product with an image.
 *
 * Props:
 * - `hight_light_photo_url`: The URL of the image to be displayed.
 * - Other props are passed down to the `Card` component.
 */
const ProductWithImg = (props) => {
  return (
    <Card {...props}>
      <Card.Image
        {...props}
        src={props.hight_light_photo_url}
        alt="Product Image"
      />
    </Card>
  );
};

export { ProductWithImgAndText, ProductWithImg };
