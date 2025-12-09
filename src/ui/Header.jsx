import Logo from "./Logo";
import Button from "./Button";
import Container from "./Container";
import styled from "styled-components";
import NavList from "./NavList";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import BurgerIcon from "./BurgerIcon";
import Dropdowns from "./Dropdowns";
import AuthButtons from "./AuthButtons";
import { useAuth } from "../contexts/AuthContext";
import UserAvatar from "../features/authentication/UserAvatar";

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

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { isAuthenticated } = useAuth();

  return (
    <StyledHeader>
      <Dropdowns>
        <Container>
          <HeaderContainer>
            <Logo />
            <HeaderContent>
              <NavList />
            </HeaderContent>
            <HeaderActions>
              {isAuthenticated ? (
                <Dropdowns.Menu>
                  <Dropdowns.Toggler menuId="user-avatar">
                    <UserAvatar />
                  </Dropdowns.Toggler>

                  <Dropdowns.List menuId="user-avatar">
                    <Dropdowns.Item>option1</Dropdowns.Item>
                    <Dropdowns.Item>option2</Dropdowns.Item>
                    <Dropdowns.Item>option3</Dropdowns.Item>
                  </Dropdowns.List>
                </Dropdowns.Menu>
              ) : (
                <AuthButtons />
              )}

              <BurgerIcon
                isActive={menuOpened}
                onClick={(e) => {
                  // Prevent this click from bubbling to the document listener
                  // which is used to close the mobile menu when clicking outside
                  e.stopPropagation();
                  setMenuOpened((val) => !val);
                }}
              />
            </HeaderActions>
            {menuOpened && <MobileMenu setMenuOpened={setMenuOpened} />}
          </HeaderContainer>
        </Container>
      </Dropdowns>
    </StyledHeader>
  );
}

export default Header;
