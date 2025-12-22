import ReviewsImg from "../assets/optimReviews.png";
import Hero from "../ui/Hero";
import SectionHeader from "../ui/SectionHeader";
import SectionLayout from "../ui/SectionLayout";
import ReviewsList from "../features/reviews/ReviewsList";

function Reviews() {
  return (
    <>
      <Hero
        title="Your Feedback Matters."
        paragraph="Share your thoughts on the care you received and help others make informed decisions when booking their appointments. Your review can guide others to better care."
        imgSrc={ReviewsImg}
      />

      <SectionLayout>
        <SectionHeader
          title="Reviews"
          subTitle="Below is a list of doctors who treated you. Click on ‘Give Review’ to give us your feedback."
        />
        <ReviewsList />
      </SectionLayout>
    </>
  );
}

export default Reviews;
