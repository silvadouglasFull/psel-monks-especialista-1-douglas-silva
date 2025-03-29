import { colors } from "@/assets/colors";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 0.125rem;
`;
const NumberItemContainer = styled(Container)`
  border-radius: 0.5rem;
  background-color: ${colors.grayLight};
  gap: 0.5rem;
  margin-bottom: 0.625rem;
`;
const NumberItem = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  color: ${colors.darkPurple};
  padding: 0.5rem;
`;
const OperatorSignal = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.darkGray};
  padding: 0.5rem;
`;
export { Container, NumberItemContainer, NumberItem, OperatorSignal };
