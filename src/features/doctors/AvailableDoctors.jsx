import styled from "styled-components";
import AvailableDoctorCard from "./AvailableDoctorCard";
import { useDoctors } from "./useDoctors";
import SectionHeader from "../../ui/SectionHeader";
import Spinner from "../../ui/Spinner";

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
  const { doctors, isPending: isLoading } = useDoctors();
  const doctorsNum = doctors?.length;

  if (isLoading) return <Spinner />;

  return (
    <>
      <SectionHeader
        title={`(${doctorsNum}) doctors available`}
        subTitle="Book appointments with minimum wait-time & verfied doctor details"
      />
      <StyledDoctorsList>
        {doctors.map((doctor) => (
          <AvailableDoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </StyledDoctorsList>
    </>
  );
}

export default AvailableDoctors;
