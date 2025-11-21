import styled from "styled-components";

const Form = styled.form`
  width: 56rem;
  max-width: 100%;
  padding: 2.5rem;
  border-radius: 1.6rem;
  box-shadow: 5px 5px 10px -9px var(--color-muted),
    -5px -5px 10px -9px var(--color-muted),
    -5px 5px 10px -9px var(--color-muted), 5px -5px 10px -9px var(--color-muted);
  backdrop-filter: blur(35px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`;

export default Form;
