import styled from "styled-components";

const StyledHero = styled.div`
  height: calc(100vh - 9.37rem);
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    & {
      flex-direction: row;
    }
  }

  @media (min-width: 991px) {
    & {
      height: calc(100vh - 12rem);
    }
  }
`;

const LeftHandSide = styled.div`
  order: 2;
  flex-basis: 100%;
  background-color: var(--primary-green);

  @media (min-width: 768px) {
    & {
      order: 1;
      flex-basis: 50%;
    }
  }
`;

const LeftConatiner = styled.div`
  color: white;
  padding: 2rem;
  text-align: center;
  padding-top: calc(var(--container-lg-pd) + 100px);

  @media (max-width: 540px) {
    padding-top: calc(var(--container-lg-pd));
  }

  @media (min-width: 768px) {
    padding-left: var(--container-md-pd);
    text-align: left;
  }

  @media (min-width: 991px) {
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

  @media (min-width: 768px) {
    margin: 1.5rem 0 7rem;
  }
`;

// Image conatiner too.
const RightHandSide = styled.div`
  display: none;
  overflow: hidden;

  @media (min-width: 768px) {
    & {
      display: block;
      order: 2;
      flex-basis: 50%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
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
