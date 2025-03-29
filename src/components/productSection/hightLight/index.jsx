import React from "react";
import { ProductWithImg } from "@/components/product";
import { Title } from "@/components/title";
import { SubTitle } from "@/components/title/subTitle";
import { Container } from "@/components/productSection/hightLight/styles";
const HightLight = () => {
  return (
    <Container>
      <Title>Lorem ipsum dolor sit amet consectetur</Title>
      <SubTitle
        style={{
          marginBottom: ".6250rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
        sit scelerisque quis commodo aenean viverra
      </SubTitle>
      <ProductWithImg
        style={{
          maxHeight: 425,
          width: "100%",
        }}
      />
    </Container>
  );
};

export { HightLight };
