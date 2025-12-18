import styled from "styled-components";
import ImageCircle from "./ImageCircle";
import StarRating from "./StarRating";
import Button from "./Button";
import image from "../assets/doc22.png";

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
    font-weight: 500;
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

  & button:first-child {
    padding: var(--btn-lg-pd);
    color: var(--color-grey-800);
    border-radius: var(--border-radius-md);
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-grey-200);
    }
  }
`;

function ReviewForm() {
  return (
    <StyledReviewForm>
      <Header>
        <h3>Rate Your Experience</h3>
        <span>Your Feedback help us improve.</span>
      </Header>

      <DoctorInfo>
        <ImageCircle src={image} size="8" />
        <div>
          <h4>Dr. sarah jenkins</h4>
          <span>Cardiologist</span>
        </div>
      </DoctorInfo>

      <RatingWithStars>
        <p>How would you rate your visit?</p>
        <StarRating size={40} />
        <span>4 out of 5 stars</span>
      </RatingWithStars>

      <div>
        <Label>
          <label htmlFor="comment">Written Review</label>
          <span>(Optional)</span>
        </Label>
        <TextArea
          id="comment"
          placeholder="Tell us about your appointment... (Was the wait time short? Was the diagnosis clear?)"></TextArea>
      </div>

      <Footer>
        <button>Cancel</button>
        <Button>Submit Review</Button>
      </Footer>
    </StyledReviewForm>
  );
}

export default ReviewForm;
