import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * Styled anchor (`<a>`) component for navigation links.
 * The component includes padding, font size adjustments, and hover effects.
 */
const Link = styled.a`
  color: white; /* Default text color */
  padding: 14px 16px; /* Adds padding for better clickable area */
  text-decoration: none; /* Removes underline from links */
  font-size: 0.75rem; /* Sets the base font size */
  display: block; /* Ensures full width for better clickability */

  /* Hover effect: Changes background and text color */
  &:hover {
    background-color: ${colors.lightPurple};
    color: ${colors.blank};
  }

  /* Adjust font size for larger screens */
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;

export { Link };
