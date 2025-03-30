import styled from "styled-components";
import Card from "../card";
import { breakpoints } from "@/constants/breackPoints";
/**
 * A styled container component that extends the `Card` component.
 * It adapts its layout based on the screen size using media queries, adjusting its width and margin
 * at different breakpoints (`tablet` and `desktop`).
 *
 * @component
 * @example
 * <CardSectionContainer>
 *   //Card content goes here
 * </CardSectionContainer>
 */
const CardSectionContainer = styled(Card)`
  @media (min-width: ${breakpoints.tablet}) {
    margin: 0.625rem;
    width: ${Number(String(breakpoints.tablet).replace("px", "")) / 2};
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0.625rem;
    width: 18.75rem;
  }
`;
export { CardSectionContainer };
