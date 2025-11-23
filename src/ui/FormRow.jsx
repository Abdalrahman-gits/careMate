import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & label {
    width: fit-content;
    text-transform: capitalize;
    font-size: 1.4rem;
    color: var(--color-muted);
    cursor: pointer;
  }
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      <label htmlFor={label}>{label}</label>
      <div>
        {children}
        {error && <p>{error}</p>}
      </div>
    </StyledFormRow>
  );
}

export default FormRow;
