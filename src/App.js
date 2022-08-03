import React from "react";
import { Routes, Route} from "react-router-dom";
import { Login } from "./Components/Authentication/Login";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import ProtectedRoute from "./Helpers/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
