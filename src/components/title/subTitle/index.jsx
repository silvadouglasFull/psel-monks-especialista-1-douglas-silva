import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
/**
 * `SubTitle` is a styled h2 component that renders a subtitle with customizable font size, weight, and letter spacing.
 * The font size adjusts based on the screen size using media queries for better responsiveness.
 */
const SubTitle = styled.h2`
  font-weight: 100;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2%;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;
export { SubTitle };
