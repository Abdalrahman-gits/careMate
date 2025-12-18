import styled from "styled-components";
import ImageCircle from "../../ui/ImageCircle";
import StarRating from "../../ui/StarRating";
import Button from "../../ui/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAddReview } from "./useAddReview";
import { useAuth } from "../../contexts/AuthContext";
import { useEditReview } from "./useEditReview";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledReviewForm = styled.div`
  width: 56rem;
  max-width: 100%;
  max-height: 80vh;
  overflow: auto;
`;

const Header = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);

  & > h3 {
    font-size: 2.4rem;
    font-weight: 600;
  }

  & > span {
    font-size: 1.4rem;
    color: var(--color-muted);
  }
`;

const DoctorInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
  background-color: var(--bg-ligt-gray);
  border-radius: var(--border-radius-md);

  & h4 {
    font-weight: 500;
    font-size: 1.8rem;
  }

  & span {
    color: var(--color-green-700);
    font-size: 1.4rem;
  }

  @media (min-width: 400px) {
    flex-direction: row;
    gap: 2rem;
    text-align: left;
  }
`;

const RatingWithStars = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & p {
    font-weight: 500;
    color: var(--color-grey-700);
  }

  & > span {
    color: var(--color-muted);
    font-size: 1.4rem;
  }
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 3rem;
  margin-bottom: 1.2rem;

  & label {
    font-weight: 600;
  }

  & span {
    color: var(--color-muted);
  }
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin-bottom: 3rem;

  &::placeholder {
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: var(--color-muted);
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding-bottom: 1rem;

  & button:first-child {
    font-weight: 500;
    padding: var(--btn-lg-pd);
    color: var(--color-red-700);
    border-radius: var(--border-radius-md);
    background: none;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-grey-200);
    }
  }
`;

function ReviewForm({ reviewData, onCloseModal }) {
  const { id, full_name, image_url, speciality, reviews } = reviewData;
  const userRate = reviews?.[0] ?? null;

  const [rateNum, setRateNum] = useState(userRate?.rate ?? null);
  const [rateComment, setRateComment] = useState(userRate?.comment ?? "");
  const { user } = useAuth();
  const { addReview, isPending: isInserting } = useAddReview();
  const { editReview, isPending: isEditing } = useEditReview();

  const isLoading = isInserting || isEditing;

  function handleRate() {
    if (rateNum === null) {
      toast.error("Please give a rate out of 5");
      return;
    }

    const data = {
      user_id: user?.user?.id,
      doctor_id: id,
      rate: rateNum,
      comment: rateComment,
    };

    // 1) Edit rate if there is rate
    if (userRate) {
      editReview({ id: userRate.id, data }, { onSettled: onCloseModal });
      return;
    }

    // 2) Add Review if there is rate yet
    addReview(data, { onSettled: onCloseModal });
  }

  return (
    <StyledReviewForm>
      <Header>
        <h3>Rate Your Experience</h3>
        <span>Your Feedback help us improve.</span>
      </Header>

      <DoctorInfo>
        <ImageCircle src={image_url} size="8" />
        <div>
          <h4>Dr. {full_name}</h4>
          <span>{speciality}</span>
        </div>
      </DoctorInfo>

      <RatingWithStars>
        <p>How would you rate your visit?</p>
        <StarRating
          size={40}
          onSetRating={setRateNum}
          defualtRate={rateNum ?? 0}
        />
        <span>{rateNum ?? 0} out of 5 stars</span>
      </RatingWithStars>

      <div>
        <Label>
          <label htmlFor="comment">Written Review</label>
          <span>(Optional)</span>
        </Label>
        <TextArea
          id="comment"
          placeholder="Tell us about your appointment... (Was the wait time short? Was the diagnosis clear?)"
          value={rateComment}
          onChange={(e) => setRateComment(e.target.value)}></TextArea>
      </div>

      <Footer>
        <button onClick={onCloseModal}>Cancel</button>
        <Button type="submit" onClick={handleRate} disabled={isLoading}>
          {userRate && !isLoading && "Edit Review"}
          {!userRate && !isLoading && "Submit Review"}
          {isInserting && (
            <>
              <span>Submitting</span> <SpinnerMini />
            </>
          )}
          {isEditing && (
            <>
              <span>Editting</span> <SpinnerMini />
            </>
          )}
        </Button>
      </Footer>
    </StyledReviewForm>
  );
}

export default ReviewForm;
