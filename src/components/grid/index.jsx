import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";

/**
 * GridContainer is a styled div that defines a flexible and responsive grid layout.
 * It adjusts the number of columns and rows based on the screen size, using media queries for different breakpoints.
 *
 * - On small screens (mobile), it displays as a column layout with padding.
 * - On tablet screens, it switches to a grid with 4 columns and adjusts the row layout.
 * - On desktop screens, it expands to 6 columns, adjusts the grid layout, and adds more padding to the sides.
 *
 * The component uses `grid-template-columns` and `grid-template-rows` to define the grid structure.
 *
 * @component
 * @example
 * <GridContainer>
 *   <GridItem>Item 1</GridItem>
 *   <GridItem>Item 2</GridItem>
 * </GridContainer>
 *
 * @returns {JSX.Element} The grid container with responsive design.
 */
const GridContainer = styled.div`
  padding: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-rows: repeat(2, 1fr);
    align-items: flex-start;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 5rem;
    padding-right: 5rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: flex-start;
  }
  gap: 0.625rem;
  row-gap: 0.625rem;
`;
/**
 * GridItem is a styled div that serves as an individual item inside the `GridContainer`.
 * It allows customization of the number of columns and rows it spans at different breakpoints,
 * as well as the margin at the bottom.
 *
 * - On small screens, it spans one column.
 * - On tablet screens, it spans a number of columns defined by the `md` prop, and the number of rows can be adjusted using the `rows` prop.
 * - On desktop screens, it spans a number of columns defined by the `lg` prop and adjusts row spans with the `lgRows` prop.
 *
 * @component
 * @example
 * <GridItem md={2} lg={3}>Item 1</GridItem>
 *
 * @param {number} md - The number of columns the item should span on tablet screens (default is 1).
 * @param {number} lg - The number of columns the item should span on desktop screens (default is 1).
 * @param {number} rows - The number of rows the item should span on tablet screens (default is 2).
 * @param {number} lgRows - The number of rows the item should span on desktop screens (default is 2).
 * @param {string} mb - The bottom margin of the item (default is 0.625rem).
 *
 * @returns {JSX.Element} The grid item with responsive column and row spans.
 */
const GridItem = styled.div`
  width: 100%;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.mb || ".625rem"};
  @media (min-width: ${breakpoints.tablet}) {
    grid-column: span ${(props) => (props.md > 4 ? 4 : props.md) || 1};
    grid-row: span ${(props) => props.rows || 2};
  }
  @media (min-width: ${breakpoints.desktop}) {
    grid-column: span ${(props) => (props.lg > 6 ? 6 : props.lg) || 1};
    grid-row: span ${(props) => (props.lgRows > 2 ? 2 : props.lgRows) || 2};
  }
`;
export { GridContainer, GridItem };
