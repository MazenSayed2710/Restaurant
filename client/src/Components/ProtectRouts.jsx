import { useNavigate } from "react-router-dom";
import useUser from "../Pages/login/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectRouts({ children }) {
  const { isAuthenticated, isLoading, error } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate, isLoading],
  );
  if (isLoading) return <Spinner />;

  if (error) console.error(error.message);
  if (isAuthenticated) return children;
}

export default ProtectRouts;
