import { useState } from "react";
import { signUp } from "../services/authService";

function Signup() {

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleSignup() {

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
      "Signup successful. Check email."
    );
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Signup
      </h1>

      <input
        className="border p-2 w-full mb-3"
        placeholder="Email"
        value={email}
        onChange={(e)=>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        className="border p-2 w-full mb-3"
        placeholder="Password"
        value={password}
        onChange={(e)=>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={handleSignup}
        className="bg-green-600 text-white px-5 py-2 rounded"
      >
        Signup
      </button>

    </div>
  );
}

export default Signup;