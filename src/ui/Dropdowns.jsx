import { createContext, useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled, { css } from "styled-components";

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
  background-color: ${({ isOpened }) =>
    isOpened ? "var(--bg-ligt-gray)" : "white"};

  padding: 0.8rem;
  transition: 0.3s background-color;

  &:hover {
    background-color: var(--bg-ligt-gray);
  }

  & > svg {
    transition: 0.3s all;
    color: var(--color-muted);
    transform: ${({ isOpened }) =>
      isOpened ? css`rotate(-180deg)` : css`rotate(0deg)`};
  }
`;

const StyledList = styled.ul`
  position: absolute;
  width: 100%;
  top: calc(100% + 0.5rem);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  border: 1px solid var(--border-color);
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem 1.6rem;
  background: none;
  transition: 0.3s background-color;

  &:hover {
    background-color: var(--bg-ligt-gray);
  }
`;

const DropdownsContext = createContext();

function Dropdowns({ children }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <DropdownsContext.Provider value={{ openId, open, close }}>
      {children}
    </DropdownsContext.Provider>
  );
}

function Toggler({ children, menuId }) {
  const { close, open, openId } = useContext(DropdownsContext);

  function handleToggle() {
    if (openId) close();
    else open(menuId);
  }

  return (
    <StyledToggler onClick={handleToggle} isOpened={openId}>
      {children}
      <FaChevronDown />
    </StyledToggler>
  );
}

function List({ children, menuId }) {
  const { openId } = useContext(DropdownsContext);

  if (openId !== menuId) return null;

  return <StyledList>{children}</StyledList>;
}

function Item({ children }) {
  return (
    <li>
      <StyledButton>{children}</StyledButton>
    </li>
  );
}

Dropdowns.Toggler = Toggler;
Dropdowns.Menu = Menu;
Dropdowns.List = List;
Dropdowns.Item = Item;

export default Dropdowns;
