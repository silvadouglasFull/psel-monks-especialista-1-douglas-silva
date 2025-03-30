import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * `Logo` is a styled `Link` component from React Router.
 * It represents a navigation link styled as a logo.
 */
const Logo = styled(Link)`
  color: white; /* Sets the text color to white */
  padding: 14px 16px; /* Adds padding for spacing */
  text-decoration: none; /* Removes the default underline */
  font-size: 17px; /* Sets the font size */
  display: block; /* Ensures the link behaves as a block element */
`;

export { Logo };
