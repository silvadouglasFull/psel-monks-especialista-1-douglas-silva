import { createContext, useReducer } from "react";

/**
 * Context for managing form state across the application.
 * This context provides the current form state and functions for managing form inputs.
 */
export const AppformContext = createContext();

/**
 * The initial state for the form context.
 * Contains fields for name, last name, contact, age, and result.
 * @constant {Object}
 */
const initialState = {
  name: "",
  last_name: "",
  contact: "",
  age: "",
  result: "",
};

/**
 * Reducer function to update the form state.
 * It updates the state based on the provided field and value.
 * @param {Object} state - The current form state.
 * @param {Object} action - The action object containing the field and value to be updated.
 * @returns {Object} - The updated form state.
 */
const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

/**
 * FormContext component that provides form state and handlers for form input changes.
 * Uses the `useReducer` hook to manage the form state.
 * @param {Object} props - The props for the component, including children.
 * @returns {JSX.Element} - The FormContext provider component.
 */
const FormContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /**
   * Handler function for changes to form inputs.
   * It updates the form state when a field's value changes.
   * @param {Event} event - The change event for the form input.
   */
  const onChange = ({ target }) => {
    const { name, value } = target;
    dispatch({ field: name, value });
  };

  /**
   * Handler function for changes to numeric form inputs.
   * It ensures that only numeric values are stored in the form state.
   * @param {Event} event - The change event for the numeric form input.
   */
  const onChangeNumber = ({ target }) => {
    const { name, value } = target;
    dispatch({ field: name, value: Number(value.replace(/[^0-9]/g, "")) });
  };

  /**
   * Function to update multiple fields in the form state at once.
   * It iterates over the provided `field` object and dispatches actions for each key-value pair.
   * @param {Object} field - An object containing the fields and their values to update in the form state.
   */
  const handleForm = (field) => {
    Object.keys(field).map((key) => {
      return dispatch({ field: key, value: field[key] });
    });
  };

  return (
    <AppformContext.Provider
      value={{
        state,
        onChange,
        onChangeNumber,
        handleForm,
      }}
    >
      {children}
    </AppformContext.Provider>
  );
};

export default FormContext;
