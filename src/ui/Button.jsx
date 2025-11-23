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
    padding: 1.4rem 3rem;
  `,

  small: css`
    padding: 0.8rem 2.6rem;
  `,
};

const Button = styled.button`
  ${({ size = "small" }) => sizes[size]};
  border-radius: var(--border-radius-md);
  text-transform: capitalize;
  transition: 0.3s;
  width: ${({ width = "fit-content" }) => width};

  ${({ variation }) => variations[variation]}
`;

export default Button;
