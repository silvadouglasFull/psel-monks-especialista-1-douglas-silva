import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
/**
 * `Title` is a styled h1 component that renders a header with customizable font size, weight, and letter spacing.
 * It adjusts the font size and weight based on the screen size using media queries.
 */
const Title = styled.h1`
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 100%;
  letter-spacing: 2%;
  margin-bottom: 0.625rem;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2.5rem;
    font-weight: 400;
  }
`;
export { Title };
