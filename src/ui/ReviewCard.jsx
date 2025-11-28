import { RiStethoscopeLine } from "react-icons/ri";
import docimg from "../assets/doctor1.png";
import Wrapper from "./Wrapper";
import { BsHourglassSplit } from "react-icons/bs";
import Button from "./Button";
import styled from "styled-components";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-lg);
  box-shadow: 5px 5px 15px -12px var(--color-muted),
    -5px 0 15px -12px var(--color-muted);

  @media (min-width: 991px) {
    flex-direction: row;
    align-items: center;
  }
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  /* width: 100%; */
  padding: 2rem;
  border-bottom: 1px solid var(--border-color);

  @media (min-width: 991px) {
    flex-direction: row;
    flex-basis: 80%;
    padding: 1rem 2rem 1rem 10rem;
    border-right: 1px solid var(--border-color);
  }
`;

const DoctorName = styled.h2`
  text-transform: capitalize;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Image = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
`;

const RatingBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  line-height: 1;
  padding: 2rem;

  & > span:first-child {
    font-size: 1.2rem;
    color: var(--color-muted);
  }
`;

const RateNumber = styled.span`
  font-weight: 600;
  font-size: 2.8rem;
  color: var(--color-rate-number);
`;

function ReviewCard({ number }) {
  return (
    <StyledCard>
      {/* <span>abs</span> */}

      {/* main info */}
      <DoctorInfo>
        <Image>
          <img src={docimg} alt="img-alt" />
        </Image>
        <div>
          <DoctorName>dr jane doe</DoctorName>
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
        <Button size="large">Give Review</Button>
      </DoctorInfo>

      {/* rating info */}
      <RatingBox>
        <span>Your Review</span>
        <RateNumber>4.0</RateNumber>
        <span>stars</span>
      </RatingBox>
    </StyledCard>
  );
}

export default ReviewCard;
