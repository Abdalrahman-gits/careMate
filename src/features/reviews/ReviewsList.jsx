import styled from "styled-components";
import { useReviews } from "./useReviews";
import ReviewCard from "../reviews/ReviewCard";
import Spinner from "../../ui/Spinner";
import { motion } from "framer-motion";

const DoctorGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--section-lg-gap);

  @media (min-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function ReviewsList() {
  const { reviews, isPending } = useReviews();

  if (isPending) return <Spinner />;

  return (
    <DoctorGrid
      variants={ContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}>
      {reviews?.map((review, i) => (
        <ReviewCard key={review.id} reviewData={review} cardNum={i + 1} />
      ))}
    </DoctorGrid>
  );
}

export default ReviewsList;
