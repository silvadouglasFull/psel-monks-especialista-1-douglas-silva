import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const Title = styled.h1`
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 100%;
  letter-spacing: 2%;
  margin-bottom: 0.625rem;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2.5rem;
    font-weight: 400;
  }
`;
export { Title };
