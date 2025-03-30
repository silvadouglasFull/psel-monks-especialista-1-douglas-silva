import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
/**
 * `Container` is a flexible layout component that adjusts its display based on the viewport width.
 * 
 * Styles:
 * - On smaller screens (mobile/tablet), the component displays in a vertical column layout, 
 *   centering the items at the top of the container.
 * - On larger screens (desktop), the component switches to a horizontal layout, 
 *   with space between items, and takes full height of the viewport.
 */
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  align-self: stretch;
  flex: 1;
  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    justify-content: space-between;
    flex: 1;
    height: 100vh;
  }
`;
export { Container };
