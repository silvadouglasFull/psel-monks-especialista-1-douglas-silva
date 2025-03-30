import styled from "styled-components";
import Card from "../card";
import { breakpoints } from "@/constants/breackPoints";
/**
 * `CardProcution` is a styled version of the `Card` component that adjusts its width
 * for desktop-sized screens.
 */
const CardProcution = styled(Card)`
  @media (min-width: ${breakpoints.desktop}) {
    width: 17.6875rem;
  }
`;
export { CardProcution };
