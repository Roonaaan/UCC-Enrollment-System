import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Login
import Login from "./Login/Login";

// Landing Student

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Login Path */}
        <Route path="/" element={<Login />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App