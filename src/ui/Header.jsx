import { useState } from "react";
import { useLogout } from "../features/authentication/useLogout";
import { useAuth } from "../contexts/AuthContext";

import Logo from "./Logo";
import SpinnerMini from "./SpinnerMini";
import Container from "./Container";
import styled from "styled-components";
import NavList from "./NavList";
import MobileMenu from "./MobileMenu";
import BurgerIcon from "./BurgerIcon";
import Dropdowns from "./Dropdowns";
import AuthButtons from "./AuthButtons";
import UserAvatar from "../features/authentication/UserAvatar";
import { useNavigate } from "react-router-dom";

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
  gap: 1.6rem;
`;
const HideMobile = styled.div`
  @media (max-width: 990px) {
    display: none;
  }
`;

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { isAuthenticated, isPending: isLogin } = useAuth();
  const { logout, isPending: isLogout } = useLogout();
  const navigate = useNavigate();

  const isLoading = isLogin || isLogout;

  return (
    <StyledHeader>
      <Dropdowns closeMobileMenu={() => setMenuOpened(false)}>
        <Container>
          <HeaderContainer>
            <Logo />
            <HeaderContent>
              <NavList />
            </HeaderContent>
            <HeaderActions>
              {isLoading && <SpinnerMini />}

              {!isLoading && isAuthenticated && (
                // Display userAvatar or login-register buttons
                <Dropdowns.Menu>
                  <Dropdowns.Toggler menuId="user-avatar">
                    <UserAvatar />
                  </Dropdowns.Toggler>

                  <Dropdowns.List menuId="user-avatar">
                    <Dropdowns.Item>Profile</Dropdowns.Item>
                    <Dropdowns.Item
                      onClick={() => navigate("/booked-appointments")}>
                      My Appointments
                    </Dropdowns.Item>
                    <Dropdowns.Item onClick={logout}>Logout</Dropdowns.Item>
                  </Dropdowns.List>
                </Dropdowns.Menu>
              )}

              {!isLoading && !isAuthenticated && (
                <HideMobile>
                  <AuthButtons />
                </HideMobile>
              )}

              <BurgerIcon isActive={menuOpened} setMenuOpened={setMenuOpened} />
            </HeaderActions>
            {menuOpened && (
              <MobileMenu
                setMenuOpened={setMenuOpened}
                isAuthenticated={isAuthenticated}
              />
            )}
          </HeaderContainer>
        </Container>
      </Dropdowns>
    </StyledHeader>
  );
}

export default Header;
