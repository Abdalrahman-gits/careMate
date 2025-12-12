import styled from "styled-components";
import StarRating from "../../ui/StarRating";

const StyledDoctorInfo = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  text-align: center;

  & img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  @media (min-width: 668px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    text-align: left;
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

function DoctorInfo({ doctor }) {
  const { full_name, speciality, rate, image_url } = doctor;

  return (
    <StyledDoctorInfo>
      <img src={image_url} alt={`Dr. ${full_name} image`} />
      <DoctorDetails>
        <h2>Dr. {full_name}</h2>
        <span>{speciality}</span>
        <StarRating size={12} defualtRate={rate} isReadOnly={true} />
      </DoctorDetails>
    </StyledDoctorInfo>
  );
}

export default DoctorInfo;
