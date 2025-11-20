import styled from "styled-components";

// Default height is (100dvh - header-height)
const HeroContainer = styled.div`
  min-height: ${({ minheight }) =>
    minheight ? minheight : "calc(100dvh - 7.6rem)"};
  background-color: var(--primary-green);
  display: flex;
  align-items: center;

  @media (min-width: 991px) {
    min-height: ${({ minheight }) =>
      minheight ? minheight : "calc(100dvh - 7.8rem)"};
    align-items: stretch;
  }
`;

export default HeroContainer;
