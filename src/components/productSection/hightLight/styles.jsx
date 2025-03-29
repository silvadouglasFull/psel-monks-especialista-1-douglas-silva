import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
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
