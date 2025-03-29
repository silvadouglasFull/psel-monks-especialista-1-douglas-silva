import { colors } from "@/assets/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex: 1;
  max-width: 60%;
  padding: 1.875rem;
  color: ${colors.blank};
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }
`;
export { TitleContainer };
