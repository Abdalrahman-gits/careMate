import doctorsImage from "../assets/AppointmentImage.png";
import AvailableDoctors from "../ui/AvailableDoctors";
import Hero from "../ui/Hero";
import SectionHeader from "../ui/SectionHeader";
import SectionLayout from "../ui/SectionLayout";
import FilterColumn from "../ui/FilterColumn";
import FilterBox from "../ui/FilterBox";

function Doctors() {
  return (
    <>
      <Hero
        imgMinHeight="80vh"
        title="Book Your Next Doctor Visit in Seconds."
        paragraph="CareMate helps you find the best healthcare provider by specialty, location, and more, ensuring you get the care you need."
        imgSrc={doctorsImage}
      />

      <SectionLayout paddingTopMobile="0">
        <FilterBox title="Find a doctor at your own ease">
          <FilterColumn label="Specialty" value="Dentist" />
          <FilterColumn label="Rating" value="5" />
          <FilterColumn label="Experience" value="2-10 years" />
          <FilterColumn label="Booking Fee" value="No" />
        </FilterBox>
        <SectionHeader
          title="(X) doctors available"
          subTitle="Book appointments with minimum wait-time & verfied doctor details"
        />
        <AvailableDoctors />
      </SectionLayout>
    </>
  );
}

export default Doctors;
