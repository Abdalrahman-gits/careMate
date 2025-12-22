import styled from "styled-components";
import { useTypeAnimation } from "../hooks/useTypeAnimation";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  background-color: var(--primary-green);
  min-height: ${({ minheight }) =>
    minheight ? "auto" : "calc(100dvh - var(--header-h-sm))"};

  @media (min-width: 991px) {
    min-height: ${({ minheight }) =>
      minheight ? minheight : "calc(100dvh - var(--header-h-lg))"};
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const LeftHandSide = styled.div`
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

  /* To make sure that the LHS is aligned with the container */
  @media (min-width: 1440px) {
    margin-left: calc((100vw - 1440px) / 2);
  }
`;

const MutedText = styled.p`
  color: var(--color-light-white);
  letter-spacing: -1px;
  margin: 1rem 0 3rem;
  line-height: 180%;
  word-spacing: 2px;

  span {
    animation: blink 0.2s steps(2) infinite;
  }

  @media (min-width: 991px) {
    margin: 1.5rem 0 7rem;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
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
    maxheight ? maxheight : "calc(100dvh - var(--header-h-sm))"};
  border-radius: 50%;
  object-fit: cover;
  object-position: right;

  @media (min-width: 991px) {
    max-height: ${({ maxheight }) =>
      maxheight ? maxheight : "calc(100dvh - var(--header-h-lg))"};
    border-radius: 0;
  }
`;

function Hero({ imgMinHeight, title, paragraph, imgSrc, children }) {
  const animtedText = useTypeAnimation(paragraph);

  return (
    <StyledHero minheight={imgMinHeight}>
      <LeftHandSide>
        <LeftConatiner>
          <div>
            <h1 style={{ fontWeight: "normal" }}>{title}</h1>
            <MutedText>
              {animtedText}
              <span
                style={{
                  display:
                    paragraph.length === animtedText.length ? "none" : null,
                }}>
                |
              </span>
            </MutedText>
          </div>
          {children}
        </LeftConatiner>
      </LeftHandSide>
      <RightHandSide>
        <Image
          maxheight={imgMinHeight}
          src={imgSrc}
          fetchPriority="high"
          alt="Landing-page-image"
        />
      </RightHandSide>
    </StyledHero>
  );
}

export default Hero;
