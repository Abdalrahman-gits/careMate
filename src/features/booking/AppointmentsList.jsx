import { useAppointments } from "./useAppointments";
import { useAuth } from "../../contexts/AuthContext";
import AppointmentCard from "./AppointmentCard";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const DoctorGrid = styled.div`
  display: grid;
  gap: var(--section-lg-gap);
  grid-template-columns: 1fr;
  margin-top: 2rem;
`;

function AppointmentsList() {
  const { user } = useAuth();
  const { appointments, isPending } = useAppointments(user?.user?.id);

  if (isPending) return <Spinner />;

  if (appointments.length < 1)
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "2.4rem",
          fontWeight: "600",
          color: "var(--color-red-700)",
        }}>
        There is No Appointments Yet
      </p>
    );

  return (
    <DoctorGrid>
      {appointments.map((book) => (
        <AppointmentCard key={book.id} bookInfo={book} />
      ))}
    </DoctorGrid>
  );
}

export default AppointmentsList;
