import styled from "styled-components";
import { useReviews } from "./useReviews";
import ReviewCard from "../reviews/ReviewCard";
import Spinner from "../../ui/Spinner";

const DoctorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--section-lg-gap);

  @media (min-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

function ReviewsList() {
  const { reviews, isPending } = useReviews();

  if (isPending) return <Spinner />;

  return (
    <DoctorGrid>
      {reviews?.map((review, i) => (
        <ReviewCard key={review.id} reviewData={review} cardNum={i + 1} />
      ))}
    </DoctorGrid>
  );
}

export default ReviewsList;
