import styled from "styled-components";
import Button from "../ui/Button";
import Container from "../ui/Container";
import DoctorInfo from "../features/booking/DoctorInfo";
import AddAppointment from "../features/booking/AddAppointment";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  padding: 2rem;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
`;

const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;

function Doctor() {
  return (
    <Container>
      <Header>Book Appointment: Date & Time</Header>
      <GridContainer>
        <DoctorInfo />
        <AddAppointment />
      </GridContainer>
    </Container>
  );
}

export default Doctor;
