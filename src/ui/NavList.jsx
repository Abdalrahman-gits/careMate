import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  gap: 1rem;

  ${({ direction }) =>
    direction === "vertical" &&
    css`
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    `}
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  position: relative;
  padding: 1.4rem;
  border-radius: var(--border-radius-md);

  &::after {
    content: "";
    position: absolute;
    width: 0;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -5px);
    height: 2px;
    background-color: var(--primary-green);
    transition: 0.3s width;
  }

  &.active::after,
  &:hover::after {
    width: 50%;
    color: var(--primary-green);
  }

  @media (min-width: 991px) {
    padding: 0.8rem 1.2rem;
  }
`;

function NavList({ direction = "horizontal" }) {
  return (
    <StyledNavList direction={direction}>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/doctors">Doctors</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/health-blog">Health Blog</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/reviews">Reviews</StyledNavLink>
      </li>
    </StyledNavList>
  );
}

export default NavList;
