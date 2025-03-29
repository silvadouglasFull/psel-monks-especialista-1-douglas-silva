import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const ManComputerContainer = styled.img`
  max-width: 25rem;
  max-height: 18.75rem;
  padding: 1.25rem;
  @media (min-width: ${breakpoints.tablet}) {
    max-width: 12.5rem;
    max-height: 12.5rem;
  }
`;
const ManDiv = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;
export { ManComputerContainer, ManDiv };
