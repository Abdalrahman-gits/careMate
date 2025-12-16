import styled from "styled-components";
import Button from "../../ui/Button";
import { formatMonthDay, formatTime } from "../../utils/dateFormat";

const Item = styled.li`
  background-color: inherit;
  width: calc((100% / 3) - 1rem);
`;

const StyledButton = styled(Button)`
  background-color: ${({ variation }) => variation === "bordered" && "inherit"};
  width: 100%;
  gap: 0.5rem;

  & > p {
    font-weight: bold;
  }

  & > span {
    font-size: 1.4rem;
  }

  &:disabled,
  &:disabled:hover {
    color: var(--color-muted);
    background-color: inherit;
    text-decoration: line-through;
  }
`;

function Slot({ date, type, selected, onSelect, isBooked }) {
  const [dayName, monthName] = formatMonthDay(date);

  if (type === "time") {
    const time = formatTime(date);

    return (
      <Item>
        <StyledButton
          variation={`${
            date?.getTime() === selected?.getTime() ? "primary" : "bordered"
          }`}
          size="large"
          onClick={onSelect}
          disabled={isBooked}>
          <span>{time}</span>
        </StyledButton>
      </Item>
    );
  }

  return (
    <Item>
      <StyledButton
        variation={`${
          date?.getTime() === selected?.getTime() ? "primary" : "bordered"
        }`}
        size="large"
        direction="column"
        onClick={onSelect}>
        <p>{dayName}</p>
        <span>{monthName}</span>
      </StyledButton>
    </Item>
  );
}

export default Slot;
