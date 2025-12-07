import { NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import Button from "./Button";
import Container from "./Container";
import styled from "styled-components";
import NavList from "./NavList";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";
import MobileMenu from "./MobileMenu";
import BurgerIcon from "./BurgerIcon";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 -5px 10px -1px black;
`;

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

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Container>
        <HeaderContainer>
          <Logo />
          <HeaderContent>
            <NavList />
            <ButtonContainer>
              <Button
                variation="bordered"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("auth/login");
                }}>
                login
              </Button>
              <Button
                variation="primary"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("auth/register");
                }}>
                register
              </Button>
            </ButtonContainer>
          </HeaderContent>
          <BurgerIcon
            isActive={menuOpened}
            onClick={(e) => {
              // Prevent this click from bubbling to the document listener
              // which is used to close the mobile menu when clicking outside
              e.stopPropagation();
              setMenuOpened((val) => !val);
            }}
          />
          {menuOpened && <MobileMenu setMenuOpened={setMenuOpened} />}
        </HeaderContainer>
      </Container>
    </StyledHeader>
  );
}

export default Header;
