import styled from "styled-components";
import Container from "../ui/Container";
import DoctorInfo from "../features/booking/DoctorInfo";
import AddAppointment from "../features/booking/AddAppointment";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2rem;
  row-gap: 3rem;

  padding: 2rem;
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

const Header = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

function Doctor() {
  return (
    <CustomContainer>
      <Header>Book Appointment: Date & Time</Header>
      <GridContainer>
        <DoctorInfo />
        <AddAppointment />
      </GridContainer>
    </CustomContainer>
  );
}

export default Doctor;
