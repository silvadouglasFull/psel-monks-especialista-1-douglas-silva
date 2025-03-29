import { Tag } from "@/components/tag";
import Card from "@/components/card";
import { Container, TagsContainer } from "@/components/tagSection/styles";
const TagSection = () => {
  return (
    <Container>
      <Card.Title style={{
        marginBottom: '.625rem'
      }}>Lorem ipsum dolor sit amet consectetur</Card.Title>
      <TagsContainer>
        {Array.from({ length: 14 }).map((_, i) => (
          <Tag key={i + 2}>Perfumaria {i + 3}</Tag>
        ))}
      </TagsContainer>
    </Container>
  );
};
export { TagSection };
