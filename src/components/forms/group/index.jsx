import styled from "styled-components";
/**
 * `Group` is a styled `div` component that creates a flexible container with a column layout.
 * It aligns child elements to the start of the container both vertically and horizontally.
 * The component is used to group form elements or other content in a vertically stacked layout.
 *
 * It applies the following CSS styles:
 * - `display: flex` to enable flexbox layout.
 * - `flex-direction: column` to arrange child elements in a column.
 * - `justify-content: flex-start` to align child elements at the top of the container.
 * - `align-items: flex-start` to align child elements to the left.
 * - `margin-bottom: 0.25rem` for spacing below the group.
 *
 * @component
 * @example
 * <Group>
 *   <label>Label</label>
 *   <input type="text" />
 * </Group>
 * // This will render a vertically stacked group of form elements with a margin below.
 *
 * @returns {JSX.Element} The rendered `Group` component.
 */
const Group = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 0.25rem;
`;
export { Group };
