import { useAppointments } from "./useAppointments";
import { useAuth } from "../../contexts/AuthContext";
import AppointmentCard from "./AppointmentCard";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";

const DoctorGrid = styled.div`
  display: grid;
  gap: var(--section-lg-gap);
  grid-template-columns: 1fr;
`;

function AppointmentsList() {
  const { user } = useAuth();
  const { appointments, isPending } = useAppointments(user?.user?.id);

  if (isPending) return <Spinner />;

  return (
    <DoctorGrid>
      {appointments.map((book) => (
        <AppointmentCard bookInfo={book} />
      ))}
    </DoctorGrid>
  );
}

export default AppointmentsList;
