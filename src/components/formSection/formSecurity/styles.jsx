import { colors } from "@/assets/monks/colors";
import { CardTitle } from "@/components/card/styles";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  align-self: stretch;
  padding: 0.125rem;
  gap: .625rem;
  @media (min-width: ${breakpoints.tablet}) {
    grid-column: span 2;
  }
  @media (min-width: ${breakpoints.desktop}) {
    grid-column: span 2;
  }
`;
const NumberItemContainer = styled(Container)`
  border-radius: 0.5rem;
  background-color: ${colors.grayLight};
  margin-bottom: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;
  max-width: 14rem;
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
`;
const Title = styled(CardTitle)`
  @media (min-width: ${breakpoints.tablet}) {
    width: 100%;
  }
  @media (min-width: ${breakpoints.desktop}) {
    max-width: 17.5625rem;
  }
`;
export { Container, NumberItemContainer, NumberItem, OperatorSignal, Title };
