import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const LinksContainer = styled.div`
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  z-index: 1;
  border-bottom-left-radius: .10rem;
  border-bottom-right-radius: .10rem;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;
export { LinksContainer };
