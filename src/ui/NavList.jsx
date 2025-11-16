import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavList = styled.ul`
  display: flex;
  gap: 1rem;

  ${({ direction }) =>
    direction === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.5rem;
    `}
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 1rem 1.4rem;
  border-radius: var(--border-radius-md);

  &.active {
    color: var(--primary-green);
    background-color: var(--border-color);
  }

  &:hover {
    background-color: var(--border-color);
  }

  @media (min-width: 991px) {
    padding: 1.2rem 0.8rem;
  }
`;

function NavList({ direction = "horizontal" }) {
  return (
    <StyledNavList direction={direction}>
      <li>
        <StyledNavLink to="/">Home</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="doctors">Appointments</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="health-blog">Health Blog</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="reviews">Reviews</StyledNavLink>
      </li>
    </StyledNavList>
  );
}

export default NavList;
