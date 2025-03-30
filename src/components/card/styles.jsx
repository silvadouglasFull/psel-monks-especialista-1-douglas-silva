import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * A styled container for the card component.
 * It serves as the main wrapper for the card, defining its layout, background color, border, and margin.
 *
 * @component
 * @example
 * <CardContainer backgroundColor={colors.primary} mb="2rem">
 *   // Content here
 * </CardContainer>
 */
const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.375rem;
  margin-bottom: ${(props) => props.mb || "1.5rem"};
  @media (min-width: ${breakpoints.desktop}) {
    align-self: stretch;
  }
`;

/**
 * A styled image element used in the card.
 * This component controls the image’s size and rounded corners.
 *
 * @component
 * @example
 * <CardImage src="image.jpg" alt="Image description" />
 */
const CardImage = styled.img`
  width: 100%;
  border-radius: 0.9375rem;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 31.25rem;
  }
`;

/**
 * A styled body container for the card content.
 * It handles padding and text color for the content within the card.
 *
 * @component
 * @example
 * <CardBody>
 *   // Content here
 * </CardBody>
 */
const CardBody = styled.div`
  padding: 1rem;
  color: ${colors.dark};
`;

/**
 * A styled title for the card.
 * It defines the font size, weight, and margin for the card's title.
 *
 * @component
 * @example
 * <CardTitle>Card Title</CardTitle>
 */
const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

/**
 * A styled text element for the card.
 * This component is used for descriptive text inside the card.
 *
 * @component
 * @example
 * <CardText>This is some card text</CardText>
 */
const CardText = styled.p`
  margin-bottom: 1rem;
  color: ${colors.carbonFiber};
`;

export { CardContainer, CardBody, CardImage, CardText, CardTitle };
