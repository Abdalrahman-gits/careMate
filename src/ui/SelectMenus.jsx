import { createContext, useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

const SelectCloumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 0 0 fit-content;
`;

const StyledLabel = styled.p`
  color: var(--color-muted);
  font-size: 1.4rem;
`;

const StyledToggler = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-ligt-gray);
  padding: var(--btn-lg-pd);
  border-radius: var(--border-radius-lg);
  cursor: pointer;

  & span {
    margin: 0 3rem 0 1.5rem;
  }

  & svg {
    color: var(--color-muted);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  left: 0;
  top: calc(100% + 0.5rem);
  min-width: calc(100% + 1rem);
  max-width: calc(100% + 2rem);
  overflow-x: auto;
  padding: 0.5rem;
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.1);
  z-index: 1;
`;

const StyledItem = styled.li`
  & > button {
    background: none;
    font-weight: 500;
    text-align: left;
    padding: 1rem 1.6rem;
    width: 100%;
    transition: 0.3s background-color;

    &:hover {
      background-color: var(--bg-ligt-gray);
    }
  }

  &:not(:last-child) {
    button {
      border-bottom: 1px solid var(--border-color);
    }
  }
`;

const SelectMenusContext = createContext();

function SelectMenus({ children }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <SelectMenusContext.Provider value={{ openId, close, open }}>
      {children}
    </SelectMenusContext.Provider>
  );
}

function Label({ labelName }) {
  return <StyledLabel>{labelName}</StyledLabel>;
}

function Toggler({ selected, icon, opens: listId }) {
  const { openId, open, close } = useContext(SelectMenusContext);

  function handleClick(e) {
    e.stopPropagation();

    openId && openId === listId ? close() : open(listId);
  }

  return (
    <StyledToggler onClick={handleClick}>
      {icon}
      <span>{selected}</span>
      <IoIosArrowDown />
    </StyledToggler>
  );
}

function List({ children, listId }) {
  const { openId, close } = useContext(SelectMenusContext);
  const { ref } = useClickOutside(close, false);

  if (openId !== listId) return null;

  return <StyledList ref={ref}>{children}</StyledList>;
}

function Item({ children, onClick }) {
  const { close } = useContext(SelectMenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <StyledItem>
      <button onClick={handleClick}>{children}</button>
    </StyledItem>
  );
}

SelectMenus.SelectCloumn = SelectCloumn;
SelectMenus.Label = Label;
SelectMenus.Toggler = Toggler;
SelectMenus.List = List;
SelectMenus.Item = Item;

export default SelectMenus;
