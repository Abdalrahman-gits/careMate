import styled from "styled-components";
import NavList from "./NavList";
import { useEffect } from "react";
import AuthButtons from "./AuthButtons";
import { useClickOutside } from "../hooks/useClickOutside";

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: white;
  box-shadow: 0px 5px 10px -7px black;

  position: absolute;
  inset-inline: 0;
  padding: 2rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  z-index: 99;
  animation: fadein 0.3s 0s 1 forwards;

  @media (min-width: 991px) {
    & {
      display: none;
    }
  }

  @keyframes fadein {
    0% {
      top: calc(100% + 1rem);
      opacity: 0;
    }

    100% {
      top: 100%;
      opacity: 1;
    }
  }
`;

function MobileMenu({ setMenuOpened, isAuthenticated }) {
  // Handle Clicking outside the menu while open
  const { ref } = useClickOutside(() => setMenuOpened(false));

  return (
    <StyledMobileMenu className="mobile-menu" ref={ref}>
      <NavList direction="vertical" onClick={() => setMenuOpened(false)} />
      {!isAuthenticated && (
        <AuthButtons
          direction="vertical"
          closeMenu={() => setMenuOpened(false)}
        />
      )}
    </StyledMobileMenu>
  );
}

export default MobileMenu;
