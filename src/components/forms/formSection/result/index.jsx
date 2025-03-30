import React from "react";
import { TextInputResultContainer } from "@/components/forms/formSection/result/styles";
/**
 * `TextInput` is a functional React component that renders a styled input field of type `number` with a
 * placeholder of "Resultado*". It allows numeric input values ranging from 0 to 100, and it is
 * styled responsively based on screen size using the `TextInputResultContainer` styled component.
 *
 * This component is primarily used for capturing result values within a form.
 *
 * @component
 * @example
 * <TextInput value={someValue} onChange={handleChange} />
 * // This will render a numeric input field with the specified value and change handler.
 *
 * @param {Object} props - The properties to be passed to the input element.
 * @returns {JSX.Element} The rendered `TextInput` component.
 */
const TextInput = (props) => {
  return (
    <TextInputResultContainer
      placeholder="Resultado*"
      type="number"
      {...props}
      min={0}
      max={100}
    />
  );
};
export default TextInput;
