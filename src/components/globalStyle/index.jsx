import { colors } from "@/assets/colors";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/helvetica-neue-55');
  /* Reset básico de estilos */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', sans-serif; /* Defina uma fonte base */
    line-height: 1.5; /* Ajuste o espaçamento entre as linhas */
    background-color: ${colors.fadedGrey}; /* Cor de fundo do body */
    color: ${colors.carbonFiber}; /* Cor do texto */
    -webkit-font-smoothing: antialiased; /* Suavização da fonte para Webkit */
    -moz-osx-font-smoothing: grayscale; /* Suavização da fonte para Firefox */
  }

  /* Outros resets podem ser adicionados conforme necessário */
  ol, ul {
    list-style: none; /* Remove os marcadores de lista */
  }

  a {
    text-decoration: none; /* Remove o sublinhado de links */
  }

  img {
    max-width: 100%; /* Evita que as imagens ultrapassem a largura do contêiner */
    height: auto;
  }
`;

export default GlobalStyle;
