import React from "react";
import GlobalStyle from "@/components/globalStyle";
import FormContext from "./context/formContext";
import { ToastContainer } from "react-toastify";
import Router from "@/router";

/**
 * Main application component that wraps the entire app with essential context, styles, and routing.
 * 
 * @component
 * @returns {JSX.Element} The root element of the application, containing the global context, styles, and routing.
 */
function App() {
  return (
    <>
      {/* Provides the form state context to the entire app */}
      <FormContext>
        {/* Toast container for showing toast notifications */}
        <ToastContainer />
        
        {/* Global styles applied to the application */}
        <GlobalStyle />
        
        {/* Main router for managing different routes and views */}
        <Router />
      </FormContext>
    </>
  );
}

export default App;
