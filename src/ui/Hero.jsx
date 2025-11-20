import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  background-color: var(--primary-green);
  min-height: ${({ minheight }) =>
    minheight ? minheight : "calc(100dvh - 7.6rem)"};

  @media (min-width: 991px) {
    min-height: ${({ minheight }) =>
      minheight ? minheight : "calc(100dvh - 7.8rem)"};
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const LeftHandSide = styled.div`
  flex: 1;

  @media (min-width: 991px) {
    & {
      flex-basis: 50%;
    }
  }
`;

const LeftConatiner = styled.div`
  color: white;
  padding: 2rem;
  text-align: center;

  @media (min-width: 991px) {
    text-align: left;
    padding-top: calc(var(--container-lg-pd) + 100px);
    padding-left: var(--container-lg-pd);
  }
`;

const MutedText = styled.p`
  color: var(--color-light-white);
  font-size: 1.8rem;
  letter-spacing: -1px;
  margin: 1rem 0 3rem;
  line-height: 180%;
  word-spacing: 2px;

  @media (min-width: 991px) {
    margin: 1.5rem 0 7rem;
  }
`;

// Image conatiner.
const RightHandSide = styled.div`
  display: block;
  margin: 2rem auto;
  width: 300px;
  height: 300px;
  overflow: hidden;

  @media (min-width: 768px) {
    & {
      width: 380px;
      height: 380px;
    }
  }

  @media (min-width: 991px) {
    & {
      margin: 0;
      width: 100%;
      height: auto;
      margin-top: 0;
      text-align: left;
      flex-basis: 50%;
    }
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-height: ${({ maxheight }) =>
    maxheight ? maxheight : "calc(100dvh - 7.6rem)"};
  border-radius: 50%;
  object-fit: cover;
  object-position: right;

  @media (min-width: 991px) {
    max-height: ${({ maxheight }) =>
      maxheight ? maxheight : "calc(100dvh - 7.8rem)"};
    border-radius: 0;
  }
`;

function Hero({ imgMinHeight, title, paragraph, imgSrc, children }) {
  return (
    <StyledHero minheight={imgMinHeight}>
      <LeftHandSide>
        <LeftConatiner>
          <div>
            <h1>{title}</h1>
            <MutedText>{paragraph}</MutedText>
          </div>
          {children}
        </LeftConatiner>
      </LeftHandSide>
      <RightHandSide>
        <Image maxheight={imgMinHeight} src={imgSrc} alt="Landing-page-image" />
      </RightHandSide>
    </StyledHero>
  );
}

export default Hero;
