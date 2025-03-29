import {
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from "@/components/card/styles";
const Card = (props) => {
  return <CardContainer {...props}>{props.children}</CardContainer>;
};
const Body = CardBody;
const Image = CardImage;
const Title = CardTitle;
const Text = CardText;
Card.Image = Image;
Card.Body = Body;
Card.Title = Title;
Card.Text = Text;
export default Card;
