import styled from "styled-components";
import Container from "../ui/Container";
import AppointmentsList from "../features/booking/AppointmentsList";
import PageTitle from "../ui/PageTitle";

const StyledAppointments = styled.div`
  padding-block: 3rem;
  background-color: var(--bg-card);
  min-height: calc(100dvh - var(--header-h-sm));

  @media (min-width: 991px) {
    min-height: calc(100dvh - var(--header-h-lg));
  }
`;

function Appointments() {
  return (
    <StyledAppointments>
      <Container>
        <PageTitle>My Appointments</PageTitle>

        <AppointmentsList />
      </Container>
    </StyledAppointments>
  );
}

export default Appointments;
