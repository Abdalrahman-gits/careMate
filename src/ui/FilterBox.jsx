import styled from "styled-components";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";

const StyledFilterBox = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 4.8rem 2.4rem;
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: 0px 3px 15px 0px rgb(0, 0, 0, 0.1);

  @media (min-width: 991px) {
    position: absolute;
    inset-inline: 0;
    top: 0;
    transform: translateY(-70%);
  }
`;

const FilterFieldsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.6rem;
`;

function FilterBox({ title, children }) {
  return (
    <StyledFilterBox>
      <h2>{title}</h2>
      <FilterFieldsContainer>
        {children}
        <ButtonContainer>
          <Button size="large">Search</Button>
          <Button variation="beigeBtn" size="large">
            Reset
          </Button>
        </ButtonContainer>
      </FilterFieldsContainer>
    </StyledFilterBox>
  );
}

export default FilterBox;
