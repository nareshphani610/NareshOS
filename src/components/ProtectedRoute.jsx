import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../services/authService";

function ProtectedRoute({ children }) {

  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    async function checkUser() {

      try {

        const currentUser =
          await getUser();

        setUser(currentUser);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    checkUser();

  }, []);

  if (loading) {

    return (
      <div className="p-10 text-xl">
        Loading...
      </div>
    );

  }

  if (!user) {

    return (
      <Navigate
        to="/login"
        replace
      />
    );

  }

  return children;

}

export default ProtectedRoute;