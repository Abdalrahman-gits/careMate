import styled, { css } from "styled-components";

const ImageCircle = styled.img`
  ${({ size = 15 }) => css`
    width: ${size}rem;
    height: ${size}rem;
  `}

  border-radius: 50%;
`;

export default ImageCircle;
