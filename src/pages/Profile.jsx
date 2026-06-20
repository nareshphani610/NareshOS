import { useEffect, useState } from "react";
import {
  getUser,
  signOut,
} from "../services/authService";

function Profile() {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    getUser().then(setUser);

  }, []);

  async function logout() {

    await signOut();

    window.location.href =
      "/login";
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <p className="mt-4">
        {user?.email}
      </p>

      <button
        onClick={logout}
        className="mt-6 bg-red-600 text-white px-5 py-2 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Profile;