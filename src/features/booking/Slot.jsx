import styled from "styled-components";
import Button from "../../ui/Button";

const Item = styled.li`
  background-color: inherit;
  width: calc((100% / 3) - 1rem);
`;

const StyledButton = styled(Button)`
  background-color: inherit;
  width: 100%;
  gap: 0.5rem;

  & > p {
    font-weight: bold;
  }

  & > span {
    font-size: 1.4rem;
  }
`;

function Slot({ date, type, onClick }) {
  const [dayName, monthName] = date
    .toLocaleDateString([], {
      month: "short",
      weekday: "short",
      day: "2-digit",
    })
    .split(", ");

  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (type === "time")
    return (
      <Item>
        <StyledButton variation="bordered" size="large" onClick={onClick}>
          <span>{time}</span>
        </StyledButton>
      </Item>
    );

  return (
    <Item>
      <StyledButton
        variation="bordered"
        size="large"
        direction="column"
        onClick={onClick}>
        <p>{dayName}</p>
        <span>{monthName}</span>
      </StyledButton>
    </Item>
  );
}

export default Slot;
