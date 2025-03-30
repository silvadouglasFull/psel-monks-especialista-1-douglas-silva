import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * A styled container that displays its children in a flexible, responsive layout.
 * It arranges the items in a row, allowing them to wrap onto new lines as needed.
 * The container is centered, and the gap between items increases with larger screen sizes.
 * 
 * @component
 * @example
 * <Container>
 *   Content inside the container
 * </Container>
 */
const Container = styled.div`
  display: "flex";
  flex-direction: "row";
  flex-wrap: "wrap";
  justify-content: "center";
  align-items: "center";
  gap: 1rem;
  @media (min-width: ${breakpoints.tablet}) {
    gap: 1.25rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    gap: 2.5rem;
  }
`;

/**
 * A styled anchor (`<a>`) component that removes the default underline and applies
 * a custom color to the link text. The link also has responsive margin values that adjust
 * based on the screen size.
 * 
 * @component
 * @example
 * <Link href="https://example.com">
 *   Link text here
 * </Link>
 */
const Link = styled.a`
  text-decoration: none;
  color: ${colors.blank};
  margin: 1rem;
  @media (min-width: ${breakpoints.tablet}) {
    margin: 1.25rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    margin: 2.5rem;
  }
`;

export { Container, Link };
