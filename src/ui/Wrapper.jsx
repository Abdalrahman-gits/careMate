import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gapsize }) => (gapsize === "smaller" ? "0.5rem" : "1.6rem")};

  font-size: 1.2rem;
  color: var(--color-muted);
  text-transform: capitalize;
`;

export default Wrapper;
