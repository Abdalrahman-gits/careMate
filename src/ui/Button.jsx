import styled, { css } from "styled-components";

const variations = {
  primary: css`
    color: white;
    background-color: var(--primary-green);
  `,

  bordered: css`
    color: black;
    background-color: white;
    border: 1px solid var(--border-color);
  `,

  whiteBtn: css`
    background-color: white;
    color: var(--primary-green);
  `,
};

const Button = styled.button`
  padding: 0.8rem 2.6rem;
  border-radius: var(--border-radius-md);
  text-transform: capitalize;
  transition: 0.3s;
  width: fit-content;

  &:hover {
    letter-spacing: 0.5px;
  }

  ${(props) => variations[props.variation]}
`;

export default Button;
