import { useState } from "react";

import {
  signIn,
  signUp,
} from "../services/authService";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async () => {

      const { error } =
        await signIn(
          email,
          password
        );

      if (error) {
        alert(error.message);
        return;
      }

      window.location.reload();
    };

  const handleSignup =
    async () => {

      const { error } =
        await signUp(
          email,
          password
        );

      if (error) {
        alert(error.message);
        return;
      }

      alert(
        "Check your email for verification"
      );
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-8 rounded-3xl shadow-lg w-96">

        <h1 className="text-3xl font-bold mb-6">
          🔐 NareshOS Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-4"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white p-3 rounded-lg mb-3"
        >
          Login
        </button>

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white p-3 rounded-lg"
        >
          Sign Up
        </button>

      </div>

    </div>
  );
}

export default Login;