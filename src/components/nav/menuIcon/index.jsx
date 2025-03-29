import { colors } from "@/assets/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const MenuIcon = styled.a`
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  padding: 14px;
  cursor: pointer;
  color: ${colors.blank};
  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  z-index: 1;
`;
export { MenuIcon };
