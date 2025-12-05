import styled from "styled-components";

const DateList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1.6rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
`;

export default DateList;
