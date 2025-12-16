import ReviewCard from "./ReviewCard";
import styled from "styled-components";

const DoctorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--section-lg-gap);

  @media (min-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

function ReviewsList() {
  return (
    <DoctorGrid>
      {Array.from({ length: 4 }, (ele, i) => (
        <ReviewCard number={i + 1} />
      ))}
    </DoctorGrid>
  );
}

export default ReviewsList;
