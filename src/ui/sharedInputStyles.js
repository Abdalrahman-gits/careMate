import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1.4rem 2rem 1.4rem 5rem;
  border-radius: var(--border-radius-lg);
  background-color: #fff;
  caret-color: var(--primary-green);
  color: var(--primary-green);
`;

export const IconWrapper = styled.div`
  position: absolute;
  ${({ startdirection = "left" }) => startdirection}: 2.5rem;
  top: 50%;
  transform: translate(
    ${({ startdirection = "left" }) =>
      startdirection === "left" ? "-50%" : "50%"},
    -50%
  );
  color: var(--color-muted);
  line-height: 0;
`;
