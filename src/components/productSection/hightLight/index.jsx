import React from "react";
import { ProductWithImg } from "@/components/product";
import { Title } from "@/components/title";
import { SubTitle } from "@/components/title/subTitle";
import { Container } from "@/components/productSection/hightLight/styles";
/**
 * `HightLight` is a component that displays a highlighted product with its details.
 * It includes the product's name, description, and an image.
 *
 * Props:
 * - `description`: A short description of the product.
 * - `name`: The name of the product.
 * - `hight_light_photo_url`: URL of the product's image to be displayed.
 */
const HightLight = ({ description, name, hight_light_photo_url }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <SubTitle
        style={{
          marginBottom: ".6250rem",
        }}
      >
        {description}
      </SubTitle>
      <ProductWithImg
        hight_light_photo_url={hight_light_photo_url}
        style={{
          maxHeight: 425,
          width: "100%",
          backgroundColor: "transparent",
          border: "none",
        }}
      />
    </Container>
  );
};

export { HightLight };
