import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import Container from "./Container";
import styled from "styled-components";
import NavList from "./NavList";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import MobileMenu from "./MobileMenu";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.8rem 0px;
`;

const HeaderContent = styled.div`
  flex: 1;
  display: none;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 991px) {
    & {
      display: flex;
    }
  }
`;

const BurgerMenu = styled.div`
  padding: 0.8rem;
  background-color: var(--bg-card);
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-md);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

  @media (min-width: 991px) {
    & {
      display: none;
    }
  }

  & span {
    background-color: black;
    height: 1.5px;
    width: 3rem;
    transition: 0.3s;
  }

  &.active span:first-child {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:last-child {
    transform: rotate(-45deg) translateY(-7px) translateX(7px);
  }
`;

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header>
      <Container>
        <HeaderContainer>
          <Logo />
          <HeaderContent>
            <NavList />
            <ButtonContainer>
              <Button variation="bordered">login</Button>
              <Button variation="primary">register</Button>
            </ButtonContainer>
          </HeaderContent>
          <BurgerMenu
            className={`${menuOpened ? "active" : ""}`}
            onClick={(e) => {
              // Prevent this click from bubbling to the document listener
              // which is used to close the mobile menu when clicking outside
              e.stopPropagation();
              setMenuOpened((val) => !val);
            }}>
            <span></span>
            <span></span>
            <span></span>
          </BurgerMenu>
          {menuOpened && <MobileMenu setMenuOpened={setMenuOpened} />}
        </HeaderContainer>
      </Container>
    </header>
  );
}

export default Header;
