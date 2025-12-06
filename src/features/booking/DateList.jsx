import styled from "styled-components";

const DateList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1.6rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  max-height: 17rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: var(--border-radius-lg);
    background-color: var(--primary-green);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--border-color);
  }

  @media (min-width: 668px) {
    max-height: 27rem;
  }
`;

export default DateList;
