import styled from "styled-components";
import AuthImageBg from "../assets/AuthImage.png";
import SignupForm from "../features/authentication/SignupForm";

const AuthPageStyle = styled.div`
  background-image: url(${AuthImageBg});
  background-size: cover;
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
  return (
    <AuthPageStyle>
      <SignupForm />
    </AuthPageStyle>
  );
}

export default Auth;
