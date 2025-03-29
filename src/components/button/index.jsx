import { colors } from "@/assets/colors";
import styled from "styled-components";
const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: ${(props) => (props.variant ? colors.blank : colors.dark)};
  border-color: ${(props) => props.variant || `${colors.info}`};
  background-color: ${(props) => props.variant || `${colors.info}`};
  border-radius: 0.25rem;
  text-decoration: none;
`;
export { Button };
