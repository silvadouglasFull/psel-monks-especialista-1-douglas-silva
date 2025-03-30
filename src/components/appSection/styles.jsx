import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
import { CardBody } from "@/components/card/styles";

/**
 * Styled component that represents an image container.
 * The image has a border-radius of 8px, and its width is responsive,
 * capping at 12.5rem on desktop screens.
 *
 * @component
 * @example
 * <ImageContainer src="path-to-image.jpg" alt="Image description" />
 */
const ImageContainer = styled.img`
  border-radius: 8px;
  cursor: pointer;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 12.5rem;
  }
`;

/**
 * A container component that holds content with padding.
 * It is designed to occupy 100% width of its parent.
 *
 * @component
 * @example
 * <Container>Content goes here</Container>
 */
const Container = styled.div`
  padding: 1.875rem;
  width: 100%;
`;

/**
 * A flex container that holds cards and allows for responsive layout.
 * The layout is flex-based and adjusts from wrapping on smaller screens
 * to no-wrap on tablets and desktops, with a gap between items.
 *
 * @component
 * @example
 * <ContainerOfCards>
 *   <Card />
 *   <Card />
 * </ContainerOfCards>
 */
const ContainerOfCards = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  flex-wrap: wrap;
  padding: 1.25rem;
  gap: 0.625rem;
  @media (min-width: ${breakpoints.tablet}) {
    flex-wrap: nowrap;
  }
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

/**
 * A styled component for a container related to AppStore button.
 * On desktop screens, this container uses flexbox to arrange its children
 * in a column layout, with content aligned at the end of the container.
 *
 * @component
 * @example
 * <ContainerButtonAppStore>
 *   <Button>App Store</Button>
 * </ContainerButtonAppStore>
 */
const ContainerButtonAppStore = styled(CardBody)`
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 0.625rem;
  }
`;

export { Container, ImageContainer, ContainerOfCards, ContainerButtonAppStore };
