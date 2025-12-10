import styled from "styled-components";
import doctor1 from "../../assets/doctor1.png";
import Button from "../../ui/Button";
import { RiStethoscopeLine } from "react-icons/ri";
import { BsHourglassSplit } from "react-icons/bs";
import Wrapper from "../../ui/Wrapper";

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

function AvailableDoctorCard() {
  return (
    <StyledDoctorCard>
      <DoctorInfo>
        {/* Doctor Image */}
        <img src={doctor1} alt="doctor1" />
        {/* info */}
        <div>
          <h2>Dr Sayed</h2>
          <Wrapper>
            <Wrapper gapsize="smaller">
              <RiStethoscopeLine />
              <span>dentist</span>
            </Wrapper>
            <Wrapper gapsize="smaller">
              <BsHourglassSplit />
              <span>(X) Years</span>
            </Wrapper>
          </Wrapper>
        </div>

        {/* rating ⭐ */}
        <Wrapper>
          <span>Rating:</span>
          <span>Stars</span>
        </Wrapper>
      </DoctorInfo>

      {/* Book Btn */}
      <Button size="large" variation="bordered">
        Book Appointment
      </Button>
    </StyledDoctorCard>
  );
}

export default AvailableDoctorCard;
