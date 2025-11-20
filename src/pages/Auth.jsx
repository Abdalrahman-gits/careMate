import styled from "styled-components";
import AuthImageBg from "../assets/AuthImage.png";

const AuthPageStyle = styled.div`
  background-image: url(${AuthImageBg});
  min-height: 90dvh;
`;

function Auth() {
  console.log(AuthImageBg);
  return <AuthPageStyle>Auth page</AuthPageStyle>;
}

export default Auth;
