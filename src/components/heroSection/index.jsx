import React from "react";
import { Title } from "@/components/title";
import { SubTitle } from "@/components/title/subTitle";
import { Signature } from "@/components//img/signature";
import { TitleContainer } from "./styles";
/**
 * HeroSection component that renders a hero section with a title, subtitle, and a signature image.
 * This component is designed to be used in the landing page or introductory section of a website.
 *
 * - **Title**: Displays a bold statement about the photography service.
 * - **SubTitle**: Provides a short description to further engage the user.
 * - **Signature**: Adds an image of the photographer's signature for branding.
 *
 * @component
 * @example
 * <HeroSection />
 *
 * @returns {JSX.Element} A HeroSection component with a title, subtitle, and signature.
 */
const HeroSection = () => {
  return (
    <TitleContainer>
      <Title>Monks Fotografando Belos Prédios de Nova York</Title>
      <SubTitle>
        Guarde o momento mais bonito do dia em uma foto de qualidade.
      </SubTitle>
      <Signature />
    </TitleContainer>
  );
};
export default HeroSection;
