import { colors } from "@/assets/colors";
import { breakpoints } from "@/constants/breackPoints";
import styled from "styled-components";
const FormControl = styled.input`
  display: block;
  width: 100%;
  height: 2.5rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${colors.gray};
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 1px ${colors.purple};
  }
`;
const FormContainer = styled.form`
  @media (min-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1.25rem;
    width: 100%;
  }
`;
export { FormControl, FormContainer };
