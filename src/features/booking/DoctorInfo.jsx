import styled from "styled-components";
import img from "../../assets/doctor1.png";

const StyledDoctorInfo = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;

  margin-bottom: 3rem;

  & img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

const DoctorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > h2 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  & > span {
    font-size: 1.4rem;
    color: var(--color-muted);
  }
`;

function DoctorInfo() {
  return (
    <StyledDoctorInfo>
      <img src={img} alt="img" />
      <DoctorDetails>
        <h2>Dr.medhat</h2>
        <span>Dentist</span>
        <span>rate</span>
      </DoctorDetails>
    </StyledDoctorInfo>
  );
}

export default DoctorInfo;
