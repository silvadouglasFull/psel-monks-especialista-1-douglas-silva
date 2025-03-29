import styled from "styled-components";
import { FormControl } from "@/components/forms/styles";
import { colors } from "@/assets/colors";
const TextInput = styled(FormControl).attrs({ type: "text" })`
  border: 0px;
  border-bottom: ${(props) =>
    props.isError ? `.0625rem solid ${colors.purple}` : "0px"};
  margin-bottom: 0.625rem;
`;
export { TextInput };
