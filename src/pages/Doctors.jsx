import doctorsImage from "../assets/AppointmentImage.png";
import AvailableDoctors from "../features/doctors/AvailableDoctors";
import Hero from "../ui/Hero";
import SectionHeader from "../ui/SectionHeader";
import SectionLayout from "../ui/SectionLayout";
import FilterColumn from "../ui/FilterColumn";
import FilterBox from "../ui/FilterBox";
import { BsHourglassSplit } from "react-icons/bs";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { RiStethoscopeLine } from "react-icons/ri";

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
          <FilterColumn
            label="Specialty"
            value="Dentist"
            icon={RiStethoscopeLine}
          />
          <FilterColumn label="Rating" value="5" icon={FaStar} />
          <FilterColumn
            label="Experience"
            value="2-10 years"
            icon={BsHourglassSplit}
          />
          <FilterColumn label="Booking Fee" value="No" icon={FaDollarSign} />
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
