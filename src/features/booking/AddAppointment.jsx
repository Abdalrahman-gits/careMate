import styled from "styled-components";
import DateList from "./DateList";
import Slot from "./Slot";
import Button from "../../ui/Button";
import { generateDays, generateTime } from "../../utils/generateSlots";

const Label = styled.p`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
`;

const ButtonBox = styled.div`
  grid-column: 1 / -1;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);

  display: flex;
  justify-content: flex-end;
`;

function AddAppointment() {
  const days = generateDays(7);
  const times = generateTime();

  return (
    <>
      <div>
        <Label>Select Date</Label>
        <DateList>
          {days.map((day) => (
            <Slot key={day} date={day} type="date" />
          ))}
        </DateList>
      </div>
      <div>
        <Label>Select Time</Label>
        <DateList>
          {times.map((time) => (
            <Slot key={time} date={time} type="time" />
          ))}
        </DateList>
      </div>
      <ButtonBox>
        <Button size="large" variation="primary">
          Confirm Appointent
        </Button>
      </ButtonBox>
    </>
  );
}

export default AddAppointment;
