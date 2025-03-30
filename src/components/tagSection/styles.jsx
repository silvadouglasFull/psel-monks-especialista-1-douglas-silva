import styled from "styled-components";
/**
 * `Container` is a styled component that renders a div with padding.
 * It is intended to wrap other components with a defined padding.
 */
const Container = styled.div`
  padding: 1.5rem;
`;
/**
 * `TagsContainer` is a styled component that renders a div to hold multiple tags.
 * It uses flexbox to display tags in a row, with equal spacing between them.
 * The tags wrap onto the next line if necessary.
 */ 
const TagsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.625rem;
`;
export { Container, TagsContainer };
