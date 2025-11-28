import styled from "styled-components";
import ReviewCard from "./ReviewCard";

const StyledReviewsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--section-lg-gap);

  @media (min-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

function ReviewsList() {
  return (
    <StyledReviewsList>
      {Array.from({ length: 4 }, (ele, i) => (
        <ReviewCard number={i + 1} />
      ))}
    </StyledReviewsList>
  );
}

export default ReviewsList;
