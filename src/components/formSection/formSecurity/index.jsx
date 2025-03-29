import React from "react";
import {
  Container,
  NumberItemContainer,
  NumberItem,
} from "@/components/formSection/formSecurity/styles";
import { OperatorSignal } from "./styles";
import Form from "@/components/forms";
const FormSecurity = () => {
  return (
    <Container>
      <NumberItemContainer>
        <NumberItem>427</NumberItem>
        <OperatorSignal>+</OperatorSignal>
        <NumberItem>427</NumberItem>
      </NumberItemContainer>
      <OperatorSignal>=</OperatorSignal>
      <Form.TextInput
        placeholder="Resultado*"
        type="number"
        min={0}
        max={100}
      />
    </Container>
  );
};
export { FormSecurity };
