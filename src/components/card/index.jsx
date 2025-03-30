import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from "@/components/card/styles";

/**
 * A reusable Card component that serves as a container for card content.
 * It is composed of several sub-components such as `Card.Body`, `Card.Image`, `Card.Title`, and `Card.Text`.
 * The `Card` component can accept children and various props to customize its layout and appearance.
 *
 * @component
 * @example
 * <Card backgroundColor="#fff" mb="1.5rem">
 *   <Card.Image src="image.jpg" alt="Image description" />
 *   <Card.Body>
 *     <Card.Title>Card Title</Card.Title>
 *     <Card.Text>Some card text here.</Card.Text>
 *   </Card.Body>
 * </Card>
 */
const Card = (props) => {
  return <CardContainer {...props}>{props.children}</CardContainer>;
};

/**
 * A styled component representing the body section of the card.
 * Typically used to wrap content such as text and other card elements.
 *
 * @component
 * @example
 * <Card.Body>
 *   // Content here
 * </Card.Body>
 */
const Body = CardBody;

/**
 * A styled component representing the image section of the card.
 * Used to display an image inside the card.
 *
 * @component
 * @example
 * <Card.Image src="image.jpg" alt="Image description" />
 */
const Image = CardImage;

/**
 * A styled component representing the title section of the card.
 * Used to display a heading for the card.
 *
 * @component
 * @example
 * <Card.Title>Card Title</Card.Title>
 */
const Title = CardTitle;

/**
 * A styled component representing the text section of the card.
 * Used to display descriptive text inside the card.
 *
 * @component
 * @example
 * <Card.Text>Some descriptive text for the card.</Card.Text>
 */
const Text = CardText;

Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Text = Text;

export default Card;
