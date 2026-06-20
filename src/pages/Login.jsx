import { useState } from "react";
import { signIn } from "../services/authService";

function Login() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleLogin() {

    const {
      data,
      error,
    } = await signIn(
      email,
      password
    );

    console.log(
      "LOGIN DATA:",
      data
    );

    console.log(
      "LOGIN ERROR:",
      error
    );

    if (error) {

      alert(
        error.message
      );

      return;
    }

    alert(
      "Login Successful"
    );

    window.location.href = "/";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="bg-white p-10 rounded-3xl shadow-lg w-[420px]">

        <h1 className="text-4xl font-bold mb-8 text-center">
          🔐 NareshOS Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-4"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-6"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;