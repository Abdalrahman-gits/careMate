import styled from "styled-components";
import DateList from "./DateList";
import DateSlot from "./DateSlot";
import TimeSlot from "./TimeSlot";
import Button from "../../ui/Button";

const Label = styled.p`
  font-size: 2rem;
  font-weight: 600;

  margin-bottom: 1.6rem;
`;

function AddAppointment() {
  return (
    <>
      <div>
        <Label>Select Date</Label>
        <DateList>
          {Array.from({ length: 10 }, () => (
            <DateSlot />
          ))}
        </DateList>
      </div>
      <div>
        <Label>Select Time</Label>
        <DateList>
          {Array.from({ length: 10 }, () => (
            <TimeSlot />
          ))}
        </DateList>
      </div>
      <Button size="large" variation="primary">
        Confirm Appointent
      </Button>
    </>
  );
}

export default AddAppointment;
