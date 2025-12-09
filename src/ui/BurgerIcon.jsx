import styled from "styled-components";

const StyledBurgerIcon = styled.button`
  padding: 0.8rem;
  background: none;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;

  @media (min-width: 991px) {
    & {
      display: none;
    }
  }

  & span {
    background-color: black;
    height: 1.5px;
    width: 3rem;
    transition: 0.3s;
  }

  &.active span:first-child {
    transform: rotate(45deg) translateY(6px) translateX(6px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:last-child {
    transform: rotate(-45deg) translateY(-7px) translateX(7px);
  }
`;

function BurgerIcon({ onClick, isActive }) {
  return (
    <StyledBurgerIcon
      onClick={onClick}
      className={`${isActive ? "active" : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </StyledBurgerIcon>
  );
}

export default BurgerIcon;
