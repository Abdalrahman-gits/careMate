import styled from "styled-components";
import AvailableDoctorCard from "./AvailableDoctorCard";
import { useDoctors } from "./useDoctors";
import SectionHeader from "../../ui/SectionHeader";
import Spinner from "../../ui/Spinner";
import { memo } from "react";
import { motion } from "framer-motion";

const StyledDoctorsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  row-gap: var(--section-lg-gap);
  column-gap: var(--section-sm-gap);

  @media (max-width: 575px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Without memo ,every change in filter field causes an un neccessary render
const AvailableDoctors = memo(function AvailableDoctors({ filters }) {
  const { doctors, isPending: isLoading } = useDoctors();

  if (isLoading) return <Spinner />;

  // 1) Filtering Doctors
  const filteredDoctors = doctors.filter((doctor) => {
    const specialty =
      filters.specialty === "All" || doctor.speciality === filters.specialty;

    const rate = filters.rate === "All" || doctor.rate === filters.rate;

    const experience =
      filters.experience === "All" ||
      (doctor.experience >= filters.experience.min &&
        doctor.experience <= filters.experience.max);

    return specialty && rate && experience;
  });

  // 2) Number of passed Doctors from filter process
  const doctorsNum = filteredDoctors?.length;

  return (
    <>
      <SectionHeader
        title={`(${doctorsNum}) doctors available`}
        subTitle="Book appointments with minimum wait-time & verfied doctor details"
      />
      <StyledDoctorsList
        key={JSON.stringify(filteredDoctors)}
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}>
        {filteredDoctors.map((doctor) => (
          <AvailableDoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </StyledDoctorsList>
    </>
  );
});

export default AvailableDoctors;
