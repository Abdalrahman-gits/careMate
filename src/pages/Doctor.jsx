import styled from "styled-components";
import Container from "../ui/Container";
import DoctorInfo from "../features/doctors/DoctorInfo";
import AddAppointment from "../features/booking/AddAppointment";
import { useDoctorInfo } from "../features/doctors/useDoctorInfo";
import { useParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
import { useAppointments } from "../features/booking/useAppointments";
import { useAuth } from "../contexts/AuthContext";
import PageTitle from "../ui/PageTitle";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  row-gap: 3rem;

  padding: 2rem;
  margin-top: 2rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);

  @media (min-width: 668px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CustomContainer = styled(Container)`
  padding-block: 3rem;
`;

function Doctor() {
  const { id: doctorId } = useParams();
  const { user } = useAuth();
  const { doctor, isPending: loadDoctor } = useDoctorInfo(doctorId);
  const { appointments, isPending: LoadAppointments } = useAppointments(
    user?.user?.id
  );

  const isLoading = loadDoctor || LoadAppointments;

  if (isLoading) return <Spinner />;

  return (
    <CustomContainer>
      <PageTitle>Book Appointment: Date & Time</PageTitle>
      <GridContainer>
        <DoctorInfo doctor={doctor} />
        <AddAppointment
          doctorId={doctorId}
          userId={user?.user?.id}
          appointments={appointments}
        />
      </GridContainer>
    </CustomContainer>
  );
}

export default Doctor;
