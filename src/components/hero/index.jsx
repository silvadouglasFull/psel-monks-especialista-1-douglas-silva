import styled from "styled-components";
import img from "@/assets/navTopImage.svg";
const HeroBackground = styled.div`
  background-color: #2d2d2d; // Cor de fundo
  background-image: url(${img});
  background-position: right bottom; /* Posiciona a imagem à direita e centraliza verticalmente */
  background-repeat: no-repeat; /* Impede que a imagem se repita */
  background-size: 13rem auto; /* Faz com que a imagem cubra todo o espaço disponível */
  width: 100%; // Largura do contêiner
`;
export { HeroBackground };
