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

    &:hover {
      background-color: var(--primary-green);
      color: white;
    }
  `,

  whiteBtn: css`
    background-color: white;
    color: var(--primary-green);
  `,

  beigeBtn: css`
    background-color: var(--bg-beige);
    color: white;
  `,
};

const sizes = {
  large: css`
    padding: var(--btn-lg-pd);
  `,

  small: css`
    padding: var(--btn-sm-pd);
  `,
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  ${({ size = "small" }) => sizes[size]};
  border-radius: var(--border-radius-md);
  text-transform: capitalize;
  transition: 0.3s;
  width: ${({ width = "fit-content" }) => width};

  ${({ variation = "primary" }) => variations[variation]}
`;

export default Button;
