import styled from "styled-components";
import NavList from "./NavList";
import { useEffect } from "react";
import AuthButtons from "./AuthButtons";

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.6rem;
  background-color: white;
  box-shadow: 0px 5px 10px -7px black;

  position: absolute;
  top: 100%;
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
      transform: translateY(10px);
      opacity: 0;
    }

    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

function MobileMenu({ setMenuOpened }) {
  // Handle Clicking outside the menu while open
  useEffect(
    function () {
      function handleClickOutsideMenu(e) {
        if (!e.target.closest(".mobile-menu")) setMenuOpened(false);
      }

      document.addEventListener("click", handleClickOutsideMenu);
      return () =>
        document.removeEventListener("click", handleClickOutsideMenu);
    },
    [setMenuOpened]
  );

  return (
    <StyledMobileMenu className="mobile-menu">
      <NavList direction="vertical" />
      <AuthButtons direction="vertical" />
    </StyledMobileMenu>
  );
}

export default MobileMenu;
