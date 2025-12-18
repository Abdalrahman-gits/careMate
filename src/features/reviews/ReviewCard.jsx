import { RiStethoscopeLine } from "react-icons/ri";
import Wrapper from "../../ui/Wrapper";
import { BsHourglassSplit } from "react-icons/bs";
import Button from "../../ui/Button";
import styled from "styled-components";
import ImageCircle from "../../ui/ImageCircle";
import Modal from "../../ui/Modal";
import ReviewForm from "./ReviewForm";
import StarRating from "../../ui/StarRating";

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--border-radius-lg);
  box-shadow: 0px 0px 12px rgb(0, 0, 0, 0.1);

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

const CardNumber = styled.span`
  position: absolute;
  top: 0;
  left: 3rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-green);
  color: white;
  border-radius: 0px 0px var(--border-radius-sm) var(--border-radius-sm);
`;

// created_at
// :
// "2025-12-10T20:24:58.462113+00:00"
// experience
// :
// 14
// full_name
// :
// "Ahmed Samir"
// id
// :
// 76
// image_url
// :
// "https://enmomjenfxnhbaehgyvo.supabase.co/storage/v1/object/public/careMate_images/doc4.png"
// rate
// :
// 4
// reviews
// :
// []
// speciality
// :
// "Cardiology"

function ReviewCard({ reviewData, cardNum }) {
  const {
    image_url,
    full_name,
    speciality,
    experience,
    reviews: rateInfo,
  } = reviewData;

  return (
    <Modal>
      <StyledCard>
        <CardNumber>{cardNum}</CardNumber>

        {/* main info */}
        <DoctorInfo>
          <ImageCircle src={image_url} alt={`Dr. ${full_name}-image`} />

          <div>
            <DoctorName>Dr. {full_name}</DoctorName>
            <Wrapper>
              <Wrapper gapsize="smaller">
                <RiStethoscopeLine />
                <span>{speciality}</span>
              </Wrapper>
              <Wrapper gapsize="smaller">
                <BsHourglassSplit />
                <span>({experience}) Years</span>
              </Wrapper>
            </Wrapper>
          </div>
          <Modal.OpenButton name="review">
            <Button size="large">Give Review</Button>
          </Modal.OpenButton>
          <Modal.ModalWindow name="review">
            <ReviewForm reviewData={reviewData} />
          </Modal.ModalWindow>
        </DoctorInfo>

        {/* rating info */}
        <RatingBox>
          <span>Your Review</span>
          <RateNumber>
            {rateInfo.length >= 1 ? rateInfo[0].rate.toFixed(1) : "0.0"}
          </RateNumber>
          <StarRating
            isReadOnly={true}
            size={14}
            defualtRate={rateInfo[0]?.rate ?? 0}
          />
        </RatingBox>
      </StyledCard>
    </Modal>
  );
}

export default ReviewCard;
