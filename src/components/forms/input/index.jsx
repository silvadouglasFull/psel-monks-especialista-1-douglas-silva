import styled from "styled-components";
import { FormControl } from "@/components/forms/styles";
import { colors } from "@/assets/monks/colors";
/**
 * `TextInput` is a styled component based on `FormControl`, specifically designed for text input fields.
 * It adds custom styles to the base `FormControl`, including dynamic error styling and bottom border modifications.
 *
 * The component applies the following CSS styles:
 * - Inherits styles from `FormControl`, such as width, padding, and font styling.
 * - Adds a bottom border of `0px` by default.
 * - If the `isError` prop is passed as `true`, the bottom border changes to a solid purple line with a thickness of `.0625rem`, indicating an error state.
 * - A bottom margin of `0.625rem` is added for spacing between input fields.
 *
 * @component
 * @example
 * <TextInput placeholder="Enter your name" />
 * <TextInput isError placeholder="Error input" />
 * // The second example will display an input field with a purple error border.
 *
 * @param {Object} props - The props for the component.
 * @param {boolean} [props.isError] - If `true`, the input will have a purple bottom border to indicate an error.
 * @returns {JSX.Element} The rendered `TextInput` component with custom styles.
 */
const TextInput = styled(FormControl).attrs({ type: "text" })`
  border: 0px;
  border-bottom: ${(props) =>
    props.isError ? `.0625rem solid ${colors.purple}` : "0px"};
  margin-bottom: 0.625rem;
`;
export { TextInput };
