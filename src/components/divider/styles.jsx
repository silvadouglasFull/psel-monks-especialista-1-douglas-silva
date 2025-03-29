import { colors } from "@/assets/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const DividerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background-color: ${colors.dark};
`;
const DividerDiv = styled.div`
  width: 21.875rem;
  height: 0.0625rem;
  background-color: ${colors.lightPurple};
  @media (min-width: ${breakpoints.tablet}) {
    width: 43.75rem;
    height: 0.25rem;
  }
  @media (min-width: ${breakpoints.desktop}) {
    width: 50rem;
    height: 0.25rem;
  }
`;
export { DividerContainer, DividerDiv };
