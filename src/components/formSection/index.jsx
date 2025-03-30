import React, { useContext, useEffect, useState } from "react";
import { colors } from "@/assets/monks/colors";
import FormImage from "@/components/img/formImage";
import { GridContainer, GridItem } from "@/components/grid";
import Card from "@/components/card";
import Form from "@/components/forms";
import { FormSecurity } from "@/components/formSection/formSecurity";
import Button from "@/components/button";
import Divider from "@/components/divider";
import { AppformContext } from "@/context/formContext";
import { isValid, isValidSum } from "@/helpers/validStates";
import visitors from "@/api/fetchs/visitors";
import { toast } from "react-toastify";
/**
 * FormSection component renders a form that allows users to input personal details
 * and participate in a challenge. The form is validated before submission and sends
 * data to the server if valid. A loading state is displayed while submitting the form,
 * and toast notifications are used to inform the user of the result.
 *
 * @component
 * @example
 * return (
 *   <FormSection />
 * )
 */
const FormSection = () => {
  const { state, onChange, handleForm, onChangeNumber } =
    useContext(AppformContext);
  const [isValidSumNumbers, setIsValidSumNumbers] = useState(false);
  const { name, last_name, contact, age, number1, number2, result } = state;
  const clearForm = () => {
    handleForm({
      name: "",
      last_name: "",
      contact: "",
      age: "",
      result: "",
    });
  };
  useEffect(() => {
    /**
     * Validates the sum of two numbers and updates the state with the validation result.
     *
     * This function uses the `isValidSum` utility to check if the sum of `number1` and `number2`
     * matches the provided `result`. The validation outcome is then stored in the `setIsValidSumNumbers` state.
     *
     * @function validResult
     * @returns {void} This function does not return a value.
     */
    const validResult = () => {
      setIsValidSumNumbers(
        isValidSum({
          number1,
          number2,
          result,
        })
      );
    };
    validResult();
  }, [result, number1, number2]);
  /**
   * Handles the form submission event.
   *
   * @param {Object} e - The event object from the form submission.
   * @returns {void}
   *
   * @description
   * This function prevents the default form submission behavior, validates the required fields,
   * and sends the form data to the server. If validation fails, a warning toast is displayed.
   * If the submission is successful, a success toast is shown, and the form is cleared.
   * Otherwise, an error toast is displayed.
   *
   * @async
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    const requiredStates = {
      name,
      contact,
    };
    if (!isValid(requiredStates) || !isValidSumNumbers) {
      return toast.warn("Preencha todos os campos obrigatórios");
    }
    const id = toast.loading("Enviando dados, aguarde...");
    const payload = {
      ...requiredStates,
      last_name,
      age,
    };
    const response = await visitors.post(payload);
    toast.dismiss(id);
    if (response?.ok) {
      toast.success(response.message);
      clearForm();
    } else {
      toast.error(
        response?.message || "Não foi possível completar sua solicitação"
      );
    }
  };
  return (
    <>
      <GridContainer
        style={{
          backgroundColor: colors.dark,
          alignItems: "center",
        }}
      >
        <GridItem md={1} rows={2} lg={1}>
          <FormImage />
        </GridItem>
        <GridItem md={3} rows={2} lg={5}>
          <Card
            style={{
              backgroundColor: colors.fadedGrey,
              borderRadius: "1.5rem",
            }}
          >
            <Card.Body>
              <Card.Title>
                Quer receber as fotos do nosso site no seu e-mail?
              </Card.Title>
              <Card.Text>
                Preencha seus dados abaixo e resolva o desafio
              </Card.Text>
              <Card.Text>*Campos Obrigatórios</Card.Text>
              <Form>
                <Form.TextInput
                  placeholder="Categoria*"
                  onChange={onChange}
                  name="name"
                  value={name}
                  required
                  maxLength={50}
                />
                <Form.TextInput
                  placeholder="Categoria"
                  onChange={onChange}
                  name="last_name"
                  value={last_name}
                  maxLength={50}
                />
                <Form.TextInput
                  placeholder="Categoria*"
                  onChange={onChange}
                  name="contact"
                  value={contact}
                  required
                  maxLength={11}
                />
                <Form.TextInput
                  placeholder="Type a Number 0 to 100"
                  onChange={onChangeNumber}
                  name="age"
                  value={age}
                  maxLength={50}
                />
                <FormSecurity />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gridColumn: "span 2",
                  }}
                >
                  <Button
                    style={{
                      color: colors.dark,
                    }}
                    onClick={onSubmit}
                    disabled={!isValidSumNumbers}
                    variant={colors.lightPink}
                  >
                    Enviar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </GridItem>
      </GridContainer>
      <Divider />
    </>
  );
};
export { FormSection };
