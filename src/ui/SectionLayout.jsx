import styled from "styled-components";
import Container from "./Container";
import Footer from "./Footer";

const StyledSectionLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--section-lg-gap);

  padding-top: ${({ paddingTopMobile = "6" }) => `${paddingTopMobile}rem`};
  padding-bottom: var(--section-pb);

  @media (min-width: 1200px) {
    padding-top: 12rem;
  }
`;

function SectionLayout({ children, paddingTopMobile }) {
  return (
    <>
      <Container>
        <StyledSectionLayout paddingTopMobile={paddingTopMobile}>
          {children}
        </StyledSectionLayout>
      </Container>
      <Footer />
    </>
  );
}

export default SectionLayout;
