import { colors } from "@/assets/monks/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * `FormControl` is a styled input component used for form controls such as text inputs, number fields, etc.
 * It provides consistent styling for input elements, ensuring proper sizing, padding, and focus behavior.
 * 
 * The component applies the following CSS styles:
 * - `width: 100%` to ensure the input takes up the full width of its container.
 * - `height: 2.5rem` to set a fixed height for the input field.
 * - `padding: 0.375rem 0.75rem` for comfortable inner spacing.
 * - `font-size: 1rem` for consistent text size.
 * - `line-height: 1.5` for proper text spacing.
 * - `color: ${colors.gray}` to set the text color.
 * - `background-color: #fff` for a white background.
 * - `border-radius: 0.5rem` for rounded corners.
 * - `transition` for smooth border and shadow effects when focusing on the input field.
 * - `&:focus` applies a `box-shadow` with a purple color when the input is focused, highlighting the element.
 *
 * @component
 * @example
 * <FormControl type="text" placeholder="Enter text" />
 * // Renders a styled text input field with consistent look and feel.
 *
 * @returns {JSX.Element} The rendered `FormControl` component.
 */
const FormControl = styled.input`
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${colors.gray};
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px ${colors.purple};
  }
`;

/**
 * `FormContainer` is a styled `form` component that adapts to different screen sizes.
 * It provides a grid-based layout for form fields when viewed on tablet-sized and larger screens.
 * 
 * The component applies the following CSS styles:
 * - For tablet and larger screens, it uses a grid layout with two columns and two rows.
 * - The gap between grid items is set to `1.25rem`, providing spacing between form fields.
 * - `width: 100%` ensures the form takes up the full available width.
 *
 * @component
 * @example
 * <FormContainer>
 *   <FormControl type="text" placeholder="Name" />
 *   <FormControl type="email" placeholder="Email" />
 * </FormContainer>
 * // Renders a grid-based form layout with inputs, aligned in columns for tablet and desktop sizes.
 *
 * @returns {JSX.Element} The rendered `FormContainer` component.
 */
const FormContainer = styled.form`
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
  }
`;

export { FormControl, FormContainer };
