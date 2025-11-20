import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: var(--primary-green);
  flex: 1;

  @media (min-width: 991px) {
    & {
      flex-direction: row;
    }
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
  position: relative;
  margin: 2rem auto;
  width: 300px;
  height: 300px;

  @media (min-width: 768px) {
    & {
      width: 420px;
      height: 420px;
    }
  }

  @media (min-width: 991px) {
    & {
      margin: 0;
      width: 100%;
      height: 100%;
      margin-top: 0;
      text-align: left;
      flex-basis: 50%;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: right;

  @media (min-width: 991px) {
    border-radius: 0;
  }
`;

function Hero({ title, paragraph, imgSrc, children }) {
  return (
    <StyledHero>
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
        <Image src={imgSrc} alt="Landing-page-image" />
      </RightHandSide>
    </StyledHero>
  );
}

export default Hero;
