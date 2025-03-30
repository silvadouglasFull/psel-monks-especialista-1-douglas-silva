import React from "react";
import AuthenticatedRouters from "./authenticated";
import PublicRouter from "@/router/public";

/**
 * Router component that handles conditional routing based on the authentication state.
 * It renders different routers for authenticated and non-authenticated users.
 * 
 * @component
 * @returns {JSX.Element} A conditional rendering of the router, either for authenticated users or public access.
 */
const Router = () => {
  // The authentication state (set to `false` for now for public access).
  const isAuthenticated = false;

  // Render either the authenticated or public router based on the authentication state.
  return isAuthenticated ? <AuthenticatedRouters /> : <PublicRouter />;
};

export default Router;
