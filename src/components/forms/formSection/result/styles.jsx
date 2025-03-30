import styled from "styled-components";
import { TextInput } from "@/components/forms/input";
import { breakpoints } from "@/constants/breackPoints";
/**
 * `TextInputResultContainer` is a styled component that wraps the `TextInput` component
 * and adjusts its width based on the screen size. On smaller screens, it has a maximum width
 * of 6.875rem, and on tablet-sized screens and above, the width increases to a maximum of 12.5rem.
 *
 * This component is typically used to input values where the field size needs to be responsive.
 *
 * @component
 * @example
 * <TextInputResultContainer placeholder="Enter result" />
 * // This will render a responsive text input field with dynamic width.
 */
const TextInputResultContainer = styled(TextInput)`
  max-width: 6.875rem;
  @media (min-width: ${breakpoints.tablet}) {
    max-width: 12.5rem;
  }
`;
export { TextInputResultContainer };
