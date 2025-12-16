import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";

const SearchColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 2 0 fit-content;
`;

const Label = styled.p`
  color: var(--color-muted);
  font-size: 1.4rem;
`;

const SearchField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  background-color: var(--bg-ligt-gray);
  padding: var(--btn-lg-pd);
  border-radius: var(--border-radius-lg);

  & input {
    width: 100%;
    background-color: inherit;
  }

  & svg {
    color: var(--color-muted);
  }
`;

function Searchbar({ label }) {
  return (
    <SearchColumn type="search">
      <Label>{label}</Label>
      <SearchField type="search">
        <IoMdSearch />
        <input type="search" placeholder="Search..." />
      </SearchField>
    </SearchColumn>
  );
}

export default Searchbar;
