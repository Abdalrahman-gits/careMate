import styled from "styled-components";
import Container from "../ui/Container";
import AppointmentsList from "../features/booking/AppointmentsList";

const StyledAppointments = styled.div`
  padding-block: 3rem;
  background-color: var(--bg-card);
  min-height: calc(100dvh - var(--header-h-sm));

  @media (min-width: 991px) {
    min-height: calc(100dvh - var(--header-h-lg));
  }
`;

const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

function Appointments() {
  return (
    <StyledAppointments>
      <Container>
        <Header>My Appointments</Header>

        <AppointmentsList />
      </Container>
    </StyledAppointments>
  );
}

export default Appointments;
