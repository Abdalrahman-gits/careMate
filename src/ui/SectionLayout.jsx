import styled from "styled-components";

const SectionLayout = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--section-row-gap);

  padding-top: ${({ paddingTopMobile = "6" }) => `${paddingTopMobile}rem`};
  padding-bottom: var(--section-pb);
`;

export default SectionLayout;
