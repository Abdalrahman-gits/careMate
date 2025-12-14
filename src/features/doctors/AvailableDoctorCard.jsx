import styled from "styled-components";
import Button from "../../ui/Button";
import { RiStethoscopeLine } from "react-icons/ri";
import { BsHourglassSplit } from "react-icons/bs";
import Wrapper from "../../ui/Wrapper";
import StarRating from "../../ui/StarRating";
import { useNavigate } from "react-router-dom";
import Image from "../../ui/ImageCircle";

const StyledDoctorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--section-lg-gap);

  box-shadow: 5px 4px 10px -12px var(--color-muted),
    -5px -4px 10px -12px var(--color-muted),
    -5px 4px 10px -12px var(--color-muted),
    5px -4px 10px -12px var(--color-muted);

  padding: 3rem 1.8rem;
  background-color: var(--bg-card);
  border-radius: var(--border-radius-md);
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--section-sm-gap);

  & h2 {
    font-weight: 600;
  }
`;

function AvailableDoctorCard({ doctor }) {
  const navigate = useNavigate();
  const { id, full_name, rate, experience, speciality, image_url } = doctor;

  return (
    <StyledDoctorCard>
      <DoctorInfo>
        {/* Doctor Image */}
        <Image src={image_url} alt={`${full_name}-image`} />
        {/* info */}
        <div>
          <h2>Dr. {full_name}</h2>
          <Wrapper>
            <Wrapper gapsize="smaller">
              <RiStethoscopeLine />
              <span>{speciality}</span>
            </Wrapper>
            <Wrapper gapsize="smaller">
              <BsHourglassSplit />
              <span>
                ({experience}) {experience === 1 ? "Year" : "Years"}
              </span>
            </Wrapper>
          </Wrapper>
        </div>

        {/* rating ⭐ */}
        <Wrapper>
          <span>Rating: {rate}</span>
          <StarRating size={12} isReadOnly={true} defualtRate={rate} />
        </Wrapper>
      </DoctorInfo>

      {/* Book Btn */}
      <Button
        size="large"
        variation="bordered"
        onClick={() => navigate(`/doctors/doctor/${id}`)}>
        Book Appointment
      </Button>
    </StyledDoctorCard>
  );
}

export default AvailableDoctorCard;
