import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "./Spinner";
import { useEffect } from "react";
import styled from "styled-components";

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  inset: 0;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Get Auth Informations
  const { isAuthenticated, isPending } = useAuth();

  // 2) Check if not Authenticated ==> Navigate to login
  useEffect(
    function () {
      if (!isAuthenticated && !isPending)
        navigate("/auth/login", { replace: true });
    },
    [isPending, navigate, isAuthenticated]
  );

  // 3) Display Spinner until user info arrives
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4) Display the Target route if all is perfect
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
