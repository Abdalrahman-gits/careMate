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
<<<<<<< HEAD
    padding: var(--btn-lg-pd);
  `,

  small: css`
    padding: var(--btn-sm-pd);
=======
    padding: 1.4rem 3rem;
  `,

  small: css`
    padding: 0.8rem 2.6rem;
>>>>>>> aafb913122bd744dd6d1c101ee9905db19cd3f36
  `,
};

const Button = styled.button`
  ${({ size = "small" }) => sizes[size]};
  border-radius: var(--border-radius-md);
  text-transform: capitalize;
  transition: 0.3s;
  width: ${({ width = "fit-content" }) => width};

  ${({ variation = "primary" }) => variations[variation]}
`;

export default Button;
