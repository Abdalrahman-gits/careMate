import styled from "styled-components";

const StyledErrorMessage = styled.p`
  color: var(--color-error-red);
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-sm);
`;

function ErrorMessage({ message }) {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
}

export default ErrorMessage;
