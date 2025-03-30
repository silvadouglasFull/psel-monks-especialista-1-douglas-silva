import styled from "styled-components";
import { navTopImage } from "@/config/flavor";
import { breakpoints } from "@/constants/breackPoints";
import { colors } from "@/assets/monks/colors";

/**
 * HeroBackground is a styled div used as a hero section background with a custom image.
 * The background image is positioned at the right bottom of the container and sized to fit the width while maintaining aspect ratio.
 * The component applies a background color and an image, with responsive styles for different breakpoints.
 *
 * - On mobile, it has a basic background color and image styling.
 * - On tablet and larger screens, the component adds rounded corners at the bottom using `border-bottom-left-radius` and `border-bottom-right-radius`.
 *
 * @component
 * @example
 * <HeroBackground />
 *
 * @returns {JSX.Element} A div component styled to serve as a hero section background.
 */
const HeroBackground = styled.div`
  background-color: ${colors.darkGray}; // Cor de fundo
  background-image: url(${navTopImage});
  background-position: right bottom; /* Posiciona a imagem à direita e centraliza verticalmente */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  background-size: 13rem auto; /* Faz com que a imagem cubra todo o espaço disponível */
  width: 100%; // Largura do contêiner
  @media (min-width: ${breakpoints.tablet}) {
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
`;

export default HeroBackground;
