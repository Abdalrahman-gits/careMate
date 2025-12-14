import ReviewCard from "./ReviewCard";
import DoctorGrid from "./DoctorGrid";

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
