import { BsHourglassSplit } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";

const StyledFilterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & .filter-type {
    color: var(--color-muted);
  }
`;

const FilterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-ligt-gray);
  padding: var(--btn-lg-pd);
  border-radius: var(--border-radius-lg);
  cursor: pointer;

  & span {
    margin: 0 3rem 0 1.5rem;
  }

  & svg {
    color: var(--color-muted);
  }
`;

function FilterColumn({ label, value }) {
  return (
    <StyledFilterColumn>
      <p className="filter-type">{label}</p>
      <FilterBtn>
        <BsHourglassSplit />
        <span>{value}</span>
        <IoIosArrowDown />
      </FilterBtn>
    </StyledFilterColumn>
  );
}

export default FilterColumn;
