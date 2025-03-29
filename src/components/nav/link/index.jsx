import { colors } from "@/assets/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const Link = styled.a`
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 0.75rem;
  display: block;
  &:hover {
    background-color: ${colors.lightPurple};
    color: ${colors.blank};
  }
  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.25rem;
  }
`;
export { Link };
