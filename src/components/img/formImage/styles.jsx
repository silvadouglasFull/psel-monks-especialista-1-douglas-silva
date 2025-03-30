import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * Styled component for an image container with responsive sizing.
 * The image adapts its width and height based on the screen size.
 */
const FormImageContainer = styled.img`
  max-width: 25rem;
  max-height: 18.75rem;
  padding: 1.25rem;

  /* Adjust size for tablet screens */
  @media (min-width: ${breakpoints.tablet}) {
    max-width: 19.625rem;
    max-height: 18.75rem;
  }

  /* Adjust size for desktop screens */
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 12.5rem;
    max-height: 12.5rem;
  }
`;

/**
 * Styled component for a container that centers its children both
 * horizontally and vertically.
 */
const ManDiv = styled.div`
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
`;

export { FormImageContainer, ManDiv };
