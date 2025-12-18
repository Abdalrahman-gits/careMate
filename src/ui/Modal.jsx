import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";
import { HiXMark } from "react-icons/hi2";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  background-color: rgb(1, 1, 1, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
  z-index: 1000;
`;

const StyledModal = styled.div`
  position: relative;
  background-color: white;
  padding: 3.4rem 1.4rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  max-width: 100%;
`;

const ButtonClose = styled.button`
  position: absolute;
  background: none;
  color: var(--color-grey-500);
  right: 2.5rem;
  top: 2rem;
  border-radius: var(--border-radius-sm);
  transition: 0.3s background-color;

  &:hover {
    background-color: var(--color-grey-200);
  }

  & > svg {
    width: 3rem;
    height: 3rem;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function OpenButton({ children, name }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(name) });
}

function ModalWindow({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useClickOutside(close);

  if (openName !== name) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <ButtonClose onClick={close}>
          <HiXMark />
        </ButtonClose>

        {children}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.OpenButton = OpenButton;
Modal.ModalWindow = ModalWindow;

export default Modal;
