import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Error from "./Components/Error";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const noHeaderRoutes = ["/login", "/signup"];

  // Check login session on page load
  useEffect(() => {
    fetch("http://localhost:8000/auth/login/success", {
      method: "GET",
      credentials: "include", // send cookies
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setIsLoggedIn(true);
        else setIsLoggedIn(false);
      })
      .catch((err) => console.log("Session check error:", err));
  }, []);

  return (
    <div>
      {/* Show header only if logged in and not on login/signup */}
      {isLoggedIn && !noHeaderRoutes.includes(location.pathname) && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
