import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const Navbar = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 5rem;
  }
`;
export { Navbar };
