import styled from "styled-components";
import logoImage from "../assets/Logo.png";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 3.8rem;
  font-size: 2rem;

  color: var(--primary-green);

  @media (min-width: 1035px) {
    & {
      margin-right: 4.8rem;
      font-size: 2.8rem;
    }
  }
`;

function Logo() {
  return (
    <LogoStyled>
      <img src={logoImage} alt="logo-image" />
      <span>CareMate</span>
    </LogoStyled>
  );
}

export default Logo;
