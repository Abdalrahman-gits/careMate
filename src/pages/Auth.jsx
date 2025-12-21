import styled from "styled-components";
import AuthImageBg from "../assets/AuthImage.png";
import SignupForm from "../features/authentication/SignupForm";
import LoginForm from "../features/authentication/LoginForm";
// import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";

const AuthPageStyle = styled.div`
  background-image: url(${AuthImageBg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1.5rem;

  min-height: calc(100dvh - var(--header-h-sm));

  @media (min-width: 991px) {
    min-height: calc(100dvh - var(--header-h-lg));
  }
`;

const FullPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  inset: 0;
`;

function Auth() {
  const { isAuthenticated: isAuth, isPending } = useAuth();

  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (!isPending && isAuth) return <Navigate to="/doctors" replace={true} />;

  if (!isAuth && !isPending)
    return (
      <AuthPageStyle>
        <Outlet />
      </AuthPageStyle>
    );
}

export default Auth;
