import React from "react";
import { GridContainer, GridItem } from "@/components/grid";
import { Title } from "@/components/title";
import { SubTitle } from "@/components/title/subTitle";
import { ProductWithImg, ProductWithImgAndText } from "@/components/product";
import { HightLight } from "@/components/productSection/hightLight";
const ProductSection = () => {
  return (
    <>
      <GridContainer>
        <GridItem xs={2} md={4} lg={6} rows={2} lgRows={2}>
          <Title>Lorem ipsum dolor sit amet consectetur</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo aenean viverra
          </SubTitle>
        </GridItem>
        {Array.from({ length: 6 }).map((_, i) => (
          <GridItem md={2} xs={1} key={i}>
            <ProductWithImgAndText />
          </GridItem>
        ))}
      </GridContainer>
      <GridContainer>
        <GridItem md={2} lg={3} lgRows={2}>
          <HightLight />
        </GridItem>
        <GridItem rows={2} md={2} lg={3}>
          {Array.from({ length: 2 }).map((_, i) => (
            <ProductWithImg
              key={i + 1}
              img
              style={{
                backgroundColor: "transparent",
                border: 0,
              }}
            />
          ))}
        </GridItem>
      </GridContainer>
    </>
  );
};

export { ProductSection };
