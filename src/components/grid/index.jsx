import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
// Contêiner do grid
const GridContainer = styled.div`
  padding: 1.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 colunas de tamanhos iguais */
  }
  @media (min-width: ${breakpoints.tablet}) {
    grid-template-rows: repeat(2, 1fr);
    align-items: flex-start;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding-left: 5rem;
    padding-right: 5rem;
    grid-template-columns: repeat(6, 1fr); /* 6 colunas de tamanhos iguais */
    align-items: flex-start;
  }
  gap: 0.625rem;
  row-gap: 0.625rem; /* Espaço entre as linhas */
`;

// Coluna (representa as colunas no grid)
const GridItem = styled.div`
  width: 100%;
  justify-content: flex-start;
  margin-bottom: ${(props) => props.mb || ".625rem"};
  @media (min-width: ${breakpoints.tablet}) {
    grid-column: span ${(props) => (props.md > 4 ? 4 : props.md) || 1};
    grid-row: span ${(props) => props.rows || 2}; /* Ocupa 2 linhas se rows=2 */
  }
  @media (min-width: ${breakpoints.desktop}) {
    grid-column: span ${(props) => (props.lg > 6 ? 6 : props.lg) || 1};
    grid-row: span ${(props) => props.lgRows || 1}; /* Ocupa 2 linhas se rows=2 */
  }
`;
export { GridContainer, GridItem };
