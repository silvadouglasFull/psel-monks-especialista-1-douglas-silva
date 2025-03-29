import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

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
    max-width: 31.25rem;
  }

`;

const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 0.375rem;
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 31.25rem;
  }
`;

const CardBody = styled.div`
  padding: 1rem;
  color: #212529;
`;

const CardTitle = styled.h5`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardText = styled.p`
  margin-bottom: 1rem;
  color: #6c757d;
`;

export { CardContainer, CardBody, CardImage, CardText, CardTitle };
