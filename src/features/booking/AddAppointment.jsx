import styled from "styled-components";
import DateList from "./DateList";
import Slot from "./Slot";
import Button from "../../ui/Button";
import { generateDays, generateTime } from "../../utils/generateSlots";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAddAppointment } from "../doctors/useAddAppointment";

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

const days = generateDays(7);

function AddAppointment({ doctorId, userId, appointments }) {
  const [selectedDate, setSelectedDate] = useState(days[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const { addAppointment, isPending } = useAddAppointment(userId);

  const times = generateTime(selectedDate);

  function handleSelectAppointment() {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select both date and time");
      return;
    }

    const appointData = {
      userId,
      doctorId,

      // Removes z(timezone) from date to store it as it is.
      // When get it back from server it will be converted to local again
      date: selectedTime.toISOString().slice(0, -1),
    };

    addAppointment(appointData);
    setSelectedTime(null);
  }

  return (
    <>
      <div>
        <Label>Select Date</Label>
        <DateList>
          {days.map((day) => (
            <Slot
              key={day}
              date={day}
              type="date"
              selected={selectedDate}
              onSelect={() => setSelectedDate(day)}
            />
          ))}
        </DateList>
      </div>
      <div>
        <Label>Select Time</Label>
        <DateList>
          {times.map((time) => (
            <Slot
              key={time}
              date={time}
              type="time"
              selected={selectedTime}
              onSelect={() => setSelectedTime(time)}
              bookedAppointments={appointments}
              isBooked={appointments?.some(
                (book) =>
                  new Date(book.booking_date).getTime() === time.getTime()
              )}
            />
          ))}
        </DateList>
      </div>
      <ButtonBox>
        <Button
          size="large"
          variation="primary"
          onClick={handleSelectAppointment}
          disabled={isPending}>
          Confirm Appointent
        </Button>
      </ButtonBox>
    </>
  );
}

export default AddAppointment;
