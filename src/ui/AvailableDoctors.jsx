import styled from "styled-components";
import AvailableDoctorCard from "./AvailableDoctorCard";

const StyledDoctorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  row-gap: var(--section-lg-gap);
  column-gap: var(--section-sm-gap);

  @media (max-width: 575px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

function AvailableDoctors() {
  return (
    <StyledDoctorsList>
      {Array.from({ length: 6 }).map(() => (
        <AvailableDoctorCard />
      ))}
    </StyledDoctorsList>
  );
}

export default AvailableDoctors;
