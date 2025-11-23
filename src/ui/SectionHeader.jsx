import styled from "styled-components";

const StyledSectionHeader = styled.div`
  text-align: center;

  & h1 {
    font-weight: 600;
    color: var(--color-green);
  }

  & p {
    font-size: 1.4rem;
    color: var(--color-muted);
    margin-top: 1.6rem;
  }
`;

function SectionHeader({ title, subTitle }) {
  return (
    <StyledSectionHeader>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </StyledSectionHeader>
  );
}

export default SectionHeader;
