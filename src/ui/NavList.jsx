import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  padding: 0.8rem;

  &.active {
    color: var(--primary-green);
  }

  @media (min-width: 1035px) {
    padding: 1.2rem;
  }
`;

function NavList() {
  return (
    <ul>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="doctors">Appointments</StyledNavLink>
      <StyledNavLink to="health-blog">Health Blog</StyledNavLink>
      <StyledNavLink to="reviews">Reviews</StyledNavLink>
    </ul>
  );
}

export default NavList;
