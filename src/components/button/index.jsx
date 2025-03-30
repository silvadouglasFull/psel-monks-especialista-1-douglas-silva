import { colors } from "@/assets/monks/colors";
import styled from "styled-components";

/**
 * A styled button component that is highly customizable.
 * It includes support for different color variations, disabled state,
 * and custom styling for borders and backgrounds.
 *
 * @component
 * @example
 * <Button onClick={handleClick} variant={colors.primary}>Click me</Button>
 * <Button disabled>Disabled</Button>
 */
const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  color: ${(props) =>
    props.disabled
      ? colors.carbonFiber
      : props.variant
      ? colors.blank
      : colors.dark};
  opacity: ${(props) => (props.disabled ? 0.9 : 1)};
  border: 1px solid ${(props) => props.variant || `${colors.info}`};
  background-color: ${(props) => props.variant || `${colors.info}`};
  border-radius: 0.25rem;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

export default Button;
