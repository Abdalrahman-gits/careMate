import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import styled, { css } from "styled-components";

const StyledFilterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: ${({ type = "dropdown" }) =>
    type === "search" ? "2 0 fit-content" : " 0 0 fit-content"};

  & .filter-type {
    color: var(--color-muted);
    font-size: 1.4rem;
  }
`;

const FilterBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--bg-ligt-gray);
  padding: var(--btn-lg-pd);
  border-radius: var(--border-radius-lg);
  ${({ type = "dropdown" }) =>
    type === "search"
      ? css`
          gap: 1.5rem;

          & input {
            width: 100%;
            background-color: inherit;
          }
        `
      : css`
          cursor: pointer;

          & span {
            margin: 0 3rem 0 1.5rem;
          }
        `}

  & svg {
    color: var(--color-muted);
  }
`;

function FilterColumn({ type = "dropdown", label, value, icon: Icon }) {
  if (type === "search")
    return (
      <StyledFilterColumn type="search">
        <p className="filter-type">{label}</p>
        <FilterBtn type="search">
          <IoMdSearch />
          <input type="search" placeholder="Search..." />
        </FilterBtn>
      </StyledFilterColumn>
    );

  return (
    <StyledFilterColumn>
      <p className="filter-type">{label}</p>
      <FilterBtn>
        {Icon && <Icon />}
        <span>{value}</span>
        <IoIosArrowDown />
      </FilterBtn>
    </StyledFilterColumn>
  );
}

export default FilterColumn;
