import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";
import Hero from "./components/Hero";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home/>}>
          <Route path="hero" element={<Hero />} />
        </Route>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
