import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
/**
 * `Navbar` is a styled `div` that serves as the navigation bar for the application.
 * It adjusts its layout based on screen size, ensuring responsiveness.
 */
const Navbar = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 5rem;
  }
`;
export { Navbar };
