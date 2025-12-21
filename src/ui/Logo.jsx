import styled from "styled-components";
import logoImage from "/Logo.png";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 1rem;
  font-size: 2rem;

  color: var(--primary-green);

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  @media (min-width: 991px) {
    & {
      margin-right: 2.5rem;
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
