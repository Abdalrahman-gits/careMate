import { createContext, useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled, { css } from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

const Menu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledToggler = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: var(--border-radius-md);
  background-color: white;
  transition: 0.3s background-color;

  & > svg {
    transition: 0.3s all;
    color: var(--color-muted);
    transform: ${({ isOpened }) =>
      isOpened ? css`rotate(-180deg)` : css`rotate(0deg)`};
  }
`;

const StyledList = styled.ul`
  position: absolute;
  min-width: max-content;
  z-index: 1;
  right: 0;
  top: calc(100% + 1rem);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--bg-ligt-gray);
  transform: translateX(10px);
  position: absolute;
  min-width: max-content;
  z-index: 1;
  right: 0;
  top: calc(100% + 1rem);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--bg-ligt-gray);
  transform: translateX(10px);
  box-shadow: 1px 1px 10px -10px black, -1px -1px 10px -10px black,
    -1px 1px 10px -10px black, 1px -1px 10px -10px black;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 1.6rem;
  background: none;
  transition: 0.3s transform;

  &:hover {
    transform: translateX(4px);
  }
`;

export const DropdownsContext = createContext();

function Dropdowns({ children, closeMobileMenu }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <DropdownsContext.Provider value={{ openId, open, close, closeMobileMenu }}>
      {children}
    </DropdownsContext.Provider>
  );
}

function Toggler({ children, menuId }) {
  const { close, open, openId, closeMobileMenu } = useContext(DropdownsContext);

  function handleToggle(e) {
    e.stopPropagation();

    if (openId && openId === menuId) close();
    else {
      closeMobileMenu();
      open(menuId);
    }
  }

  return (
    <StyledToggler onClick={handleToggle} isOpened={openId === menuId}>
      {children}
      <FaChevronDown />
    </StyledToggler>
  );
}

function List({ children, menuId }) {
  const { openId, close } = useContext(DropdownsContext);
  const { ref } = useClickOutside(close, false);

  if (openId !== menuId) return null;

  return <StyledList ref={ref}>{children}</StyledList>;
}

function Item({ children, onClick }) {
  const { close } = useContext(DropdownsContext);

  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick}>{children}</StyledButton>
    </li>
  );
}

Dropdowns.Toggler = Toggler;
Dropdowns.Menu = Menu;
Dropdowns.List = List;
Dropdowns.Item = Item;

export default Dropdowns;
