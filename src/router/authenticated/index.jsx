import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AuthenticatedRouters = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<h1>Rotas com usuário logado</h1>} />
      </Routes>
    </Router>
  );
};

export default AuthenticatedRouters;
