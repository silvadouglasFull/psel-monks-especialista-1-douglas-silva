import { colors } from "@/assets/monks/colors";
import { createGlobalStyle } from "styled-components";
/**
 * GlobalStyle is a styled-components global stylesheet that resets default browser styles
 * and sets the base styles for the entire application. It applies universal resets, font styles,
 * body background color, and text color, and it ensures a consistent look across browsers.
 *
 * This component should be included at the root of your application to ensure consistent styling.
 *
 * The following styles are applied globally:
 * - Basic reset of margin, padding, and box-sizing.
 * - Font settings including 'Helvetica Neue' as the base font.
 * - Background color and text color for the body.
 * - List style reset for ordered and unordered lists.
 * - Removal of text decoration for links.
 * - Image responsiveness to prevent images from overflowing their containers.
 *
 * @component
 * @example
 * <GlobalStyle />
 *
 * @returns {JSX.Element} The global styles for the application.
 */
const GlobalStyle = createGlobalStyle`
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
