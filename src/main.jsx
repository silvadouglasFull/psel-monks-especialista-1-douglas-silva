import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/**
 * Entry point for the React application.
 * This renders the root `App` component inside the DOM element with the id "root".
 * 
 * The application is wrapped in `StrictMode` to help identify potential problems in the application during development.
 * `StrictMode` intentionally double-invokes certain lifecycle methods to help with debugging.
 * 
 * @function
 * @returns {JSX.Element} The rendered `App` component, wrapped inside `StrictMode`.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
