import styled from "styled-components";
import ImageCircle from "../../ui/ImageCircle";
import { formatMonthDay, formatTime } from "../../utils/dateFormat";
import { useDeleteAppointment } from "./useDeleteAppointment";

const Card = styled.div`
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  background-color: white;

  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  column-gap: 1.6rem;

  box-shadow: 0 0 12px rgb(0 0 0 / 10%);
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-bottom: 1rem;

  & > h3 {
    font-weight: 600;
    font-size: 2.4rem;
  }
`;

const AppointmentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--border-color);
`;

const BadgeStatus = styled.span`
  padding: 0.5rem 0.8rem;
  border-radius: var(--border-radius-md);
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
  color: var(--color-green-700);

  background-color: #dcfce7;
`;

const Speciality = styled.span`
  text-transform: capitalize;
  font-weight: 500;
  color: var(--color-green-700);
`;

const DateBox = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: var(--border-radius-lg);
  background-color: var(--bg-ligt-gray);

  display: flex;
  justify-content: space-between;
  gap: 1.6rem;
`;

const Slot = styled.div`
  & > span {
    text-transform: capitalize;
    color: var(--color-muted);
    font-size: 1.2rem;
    font-weight: 500;
  }

  & > p {
    text-transform: capitalize;
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

const Divider = styled.span`
  width: 1px;
  background-color: #ccc;
`;

const CardFooter = styled.div`
  grid-column: 2 / -1;

  display: flex;
  gap: 1rem;
  justify-content: end;
  font-weight: 500;

  & > button:first-child {
    background: none;
    padding: var(--btn-sm-pd);
    color: var(--color-red-700);
    border-radius: var(--border-radius-md);

    &:hover {
      background-color: var(--bg-ligt-gray);
    }
  }

  & > button:last-child {
    padding: var(--btn-sm-pd);
    background-color: var(--bg-ligt-gray);
    border-radius: var(--border-radius-md);
  }
`;

function AppointmentCard({ bookInfo }) {
  const { deleteAppointment, isPending } = useDeleteAppointment();
  const {
    id: bookId,
    booking_date,
    doctors: { full_name, image_url, speciality },
  } = bookInfo;

  const date = new Date(booking_date);

  const time = formatTime(date);
  const [dayName, monthInfo] = formatMonthDay(date);
  const [monthName, monthDay] = monthInfo.split(" ");

  return (
    <Card>
      <ImageCircle src={image_url} size="13" alt={`Dr. ${full_name}-image`} />

      <AppointmentDetails>
        <div>
          <Row>
            <h3>Dr. {full_name}</h3>
            <BadgeStatus>confirmed</BadgeStatus>
          </Row>
          <Speciality>{speciality}</Speciality>
        </div>

        <DateBox>
          <Slot>
            <span>{monthName}</span>
            <p>{monthDay}</p>
          </Slot>

          <Divider />

          <Slot>
            <span>{dayName}</span>
            <p>{time}</p>
          </Slot>
        </DateBox>
      </AppointmentDetails>

      <CardFooter>
        <button onClick={() => deleteAppointment(bookId)} disabled={isPending}>
          Cancel
        </button>
        <button>View Details</button>
      </CardFooter>
    </Card>
  );
}

export default AppointmentCard;
