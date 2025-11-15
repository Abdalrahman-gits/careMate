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
};

const Button = styled.button`
  padding: 0.8rem 2.6rem;
  border-radius: var(--border-radius-md);
  text-transform: capitalize;

  @media (min-width: 1035px) {
    & {
      padding: 1.2rem 3.2rem;
    }
  }

  ${(props) => variations[props.variation]}
`;

export default Button;
