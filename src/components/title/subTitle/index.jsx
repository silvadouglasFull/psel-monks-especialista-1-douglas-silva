import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const SubTitle = styled.h2`
  font-weight: 100;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 2%;
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
export { SubTitle };
