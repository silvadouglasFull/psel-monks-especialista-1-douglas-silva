import React from "react";
import { Title } from "@/components/title";
import { SubTitle } from "@/components/title/subTitle";
import { Signature } from "@/components//img/signature";
import { TitleContainer } from "./styles";
const HeroSection = () => {
  return (
    <TitleContainer>
      <Title>Lorem ipsum dolor sit amet consectetur</Title>
      <SubTitle>
        Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus
        sit scelerisque quis commodo aenean viverra
      </SubTitle>
      <Signature />
    </TitleContainer>
  );
};
export { HeroSection };
