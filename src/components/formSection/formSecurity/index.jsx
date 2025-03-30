import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  NumberItemContainer,
  NumberItem,
} from "@/components/formSection/formSecurity/styles";
import {
  OperatorSignal,
  Title,
} from "@/components/formSection/formSecurity/styles";
import TextInput from "@/components/forms/formSection/result";
import numbers from "@/api/fetchs/numbers";
import { AppformContext } from "@/context/formContext";
const FormSecurity = () => {
  const [numbersToSum, setNumbersToSum] = useState({
    number1: 0,
    number2: 0,
  });
  const { state, onChangeNumber, handleForm } = useContext(AppformContext);
  const { result } = state;
  useEffect(() => {
    const fetchNumbers = async () => {
      const response = await numbers.get();
      if (response) {
        const { data } = response;
        const numbersResponse = {
          number1: data.number1,
          number2: data.number2,
        };
        setNumbersToSum(numbersResponse);
        handleForm(numbersResponse);
      }
    };

    // Chama imediatamente para pegar os números na primeira renderização
    fetchNumbers();

    // Configura o intervalo para rodar a cada 1 minuto
    const intervalId = setInterval(fetchNumbers, 100000);

    // Limpeza do intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] garante que o efeito só será chamado uma vez na montagem
  return (
    <Container>
      <Title>Verificação de segurança</Title>
      <NumberItemContainer>
        <NumberItem>{numbersToSum.number1}</NumberItem>
        <OperatorSignal>+</OperatorSignal>
        <NumberItem>{numbersToSum.number2}</NumberItem>
      </NumberItemContainer>
      <OperatorSignal>=</OperatorSignal>
      <TextInput name="result" value={result} onChange={onChangeNumber} />
    </Container>
  );
};
export { FormSecurity };
