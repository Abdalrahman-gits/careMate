import styled from "styled-components";
import NavList from "./NavList";
import AuthButtons from "./AuthButtons";
import { useClickOutside } from "../hooks/useClickOutside";
import { AnimatePresence, motion } from "framer-motion";

const StyledMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  background-color: white;
  box-shadow: 0px 5px 10px -7px black;

  position: absolute;
  inset-inline: 0;
  top: 100%;
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
`;

function MobileMenu({ setMenuOpened, isAuthenticated }) {
  // Handle Clicking outside the menu while open
  const { ref } = useClickOutside(() => setMenuOpened(false), false);

  return (
    <StyledMobileMenu
      className="mobile-menu"
      ref={ref}
      as={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}>
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
