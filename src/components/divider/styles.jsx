import styled from "styled-components";
import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";

/**
 * A styled container that provides padding and background color
 * for the divider component. It adapts its padding based on
 * the screen size using media queries for tablet and desktop breakpoints.
 *
 * @component
 * @example
 * <DividerContainer>
 *   <StyledHr />
 * </DividerContainer>
 */
const DividerContainer = styled.div`
  background-color: ${colors.dark};

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1.25rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 2.5rem;
  }
`;

/**
 * A styled `<hr>` element that represents a divider with a border.
 * It uses the light purple color defined in the application's color palette.
 *
 * @component
 * @example
 * <StyledHr />
 */
const StyledHr = styled.hr`
  border: 1px solid ${colors.lightPurple};
`;

export { DividerContainer, StyledHr };
