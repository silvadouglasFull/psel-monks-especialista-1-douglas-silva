import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

const ImageContainer = styled.img`
  border-radius: 8px;
`;
const Container = styled.div`
  padding: 1.875rem;
`;
const ContainerOfCards = styled.div`
  display: flex;
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
`;
export { Container, ImageContainer, ContainerOfCards };
