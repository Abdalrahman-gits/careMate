import styled from "styled-components";
import Button from "./Button";
import { motion } from "framer-motion";

const StyledFilterBox = styled.div`
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 4.8rem 2.4rem;
  margin-top: -3.5rem;
  background-color: white;
  border-radius: var(--border-radius-lg);
  box-shadow: 0px 3px 15px 0px rgb(0, 0, 0, 0.1);

  @media (min-width: 1200px) {
    position: absolute;
    margin-top: 0rem;
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

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  flex-direction: ${({ direction = "horizontal" }) =>
    direction === "vertical" ? "column" : "row"};
`;

function FilterBox({ title, onSearch, onReset, children }) {
  return (
    <StyledFilterBox
      as={motion.div}
      initial={{ opacity: 0, top: 50 }}
      animate={{ opacity: 1, top: 0 }}
      transition={{ duration: 0.3 }}>
      <h2>{title}</h2>
      <FilterFieldsContainer>
        {children}
        <ButtonContainer>
          <Button size="large" onClick={onSearch}>
            Search
          </Button>
          <Button variation="beigeBtn" size="large" onClick={onReset}>
            Reset
          </Button>
        </ButtonContainer>
      </FilterFieldsContainer>
    </StyledFilterBox>
  );
}

export default FilterBox;
