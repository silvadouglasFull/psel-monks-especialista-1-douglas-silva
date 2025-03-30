import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * `MenuIcon` is a styled anchor (`<a>`) element that represents a menu toggle button.
 * It is visible on mobile devices and hidden on larger screens.
 */
const MenuIcon = styled.a`
  display: block; /* Ensures the element is displayed */
  position: absolute; /* Positions the icon at the top-right corner */
  right: 0;
  top: 0;
  padding: 14px; /* Adds padding for better click area */
  cursor: pointer; /* Changes the cursor to indicate interactivity */
  color: ${colors.blank}; /* Sets the text color */

  @media (min-width: ${breakpoints.tablet}) {
    display: none; /* Hides the menu icon on tablets and larger screens */
  }

  z-index: 1; /* Ensures the icon appears above other elements */
`;

export { MenuIcon };
