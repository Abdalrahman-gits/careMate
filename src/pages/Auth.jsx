import styled from "styled-components";
import AuthImageBg from "../assets/optimAuthimage.webp";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "../ui/Spinner";
import FullPage from "../ui/FullPage";

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
