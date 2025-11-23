import doctorsImage from "../assets/AppointmentImage.png";
import AvailableDoctors from "../ui/AvailableDoctors";
import Container from "../ui/Container";
import Hero from "../ui/Hero";
import SectionHeader from "../ui/SectionHeader";
import SectionLayout from "../ui/SectionLayout";

function Doctors() {
  return (
    <div>
      <Hero
        imgMinHeight="80vh"
        title="Book Your Next Doctor Visit in Seconds."
        paragraph="CareMate helps you find the best healthcare provider by specialty, location, and more, ensuring you get the care you need."
        imgSrc={doctorsImage}
      />
      <Container>
        <div>Filter box</div>
        <SectionLayout>
          <SectionHeader
            title="(X) doctors available"
            subTitle="Book appointments with minimum wait-time & verfied doctor details"
          />
          <AvailableDoctors />
        </SectionLayout>
      </Container>
    </div>
  );
}

export default Doctors;
