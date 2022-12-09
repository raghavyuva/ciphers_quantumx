import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    console.log(email, password);

    const response = await fetch("http://localhost:8800/api/user/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      localStorage.setItem("token", data.token);
      alert("Login successful");
      navigate("/");
    } else {
      alert("Please check your username and password or Invalid Credential");
    }
  }

  return (
    <div className="bg-purple-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-gray-50 px-6 py-8 rounded-lg shadow-2xl text-black w-full"
          onSubmit={loginUser}
        >
          <h1 className="mb-8 text-3xl text-purple-900 text-center text- font-bold">
            Login
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-blue-800 text-white hover:bg-blue-700 focus:outline-none my-1"
          >
            Login
          </button>
          <p class="text-center pt-5 mb-4">Forgot password</p>
        </form>

        <div className="text-gray-50 mt-6">
          Don't have account yet? <Link to="/Signup" className="underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
