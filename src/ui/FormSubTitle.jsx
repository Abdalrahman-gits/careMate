import styled from "styled-components";

const FormSubTitle = styled.div`
  & span {
    color: var(--color-muted);
  }

  & button {
    color: var(--primary-green);
    background-color: transparent;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default FormSubTitle;
