import styled from "styled-components";
import Card from "../card";
import { breakpoints } from "@/constants/breackPoints";
const CardMobile = styled(Card)`
  @media (min-width: ${breakpoints.tablet}) {
    margin: .625rem;
    width: ${Number(String(breakpoints.tablet).replace("px", "")) / 2};
  }
`;
export { CardMobile };
