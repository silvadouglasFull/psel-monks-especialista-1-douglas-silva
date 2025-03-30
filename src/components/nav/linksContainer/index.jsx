import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * `LinksContainer` is a styled `<div>` component that acts as a container
 * for navigation links. It controls the visibility of the menu based on
 * the `isMenuOpen` prop and adapts its layout based on screen size.
 */
const LinksContainer = styled.div`
  display: ${(props) =>
    props.isMenuOpen ? "block" : "none"}; /* Show or hide menu based on state */
  z-index: 1; /* Ensures the container appears above other elements */
  border-bottom-left-radius: 0.1rem; /* Rounds the bottom-left corner */
  border-bottom-right-radius: 0.1rem; /* Rounds the bottom-right corner */

  /* Adjust layout for tablets and larger screens */
  @media (min-width: ${breakpoints.tablet}) {
    display: flex; /* Ensures links are always visible on larger screens */
  }
`;

export { LinksContainer };
