import doctorsImage from "../assets/AppointmentImage.png";
import AvailableDoctors from "../features/doctors/AvailableDoctors";
import Hero from "../ui/Hero";
import SectionLayout from "../ui/SectionLayout";
import FilterBox from "../ui/FilterBox";
import { BsHourglassSplit } from "react-icons/bs";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { RiStethoscopeLine } from "react-icons/ri";
import SelectMenus from "../ui/SelectMenus";
import { useState } from "react";

const filterData = {
  specialty: [
    "All",
    "Dentist",
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Gynecology",
  ],
  rate: ["All", ...Array.from({ length: 5 }, (_, i) => i + 1)],
  experience: [
    "All",
    { min: 0, max: 1 },
    { min: 2, max: 9 },
    { min: 10, max: 15 },
  ],
  fee: ["Yes", "No"],
};

const initialValues = {
  specialty: filterData["specialty"][0],
  rate: filterData["rate"][0],
  experience: filterData["experience"][0],
  fee: filterData["fee"][0],
};

function Doctors() {
  const [selectedValues, setSelectedValues] = useState(initialValues);
  const [appliedFilters, setAppliedFilters] = useState(initialValues);

  function handleSearch() {
    setAppliedFilters(selectedValues);
  }

  function handleReset() {
    setSelectedValues(initialValues);
    setAppliedFilters(initialValues);
  }

  return (
    <>
      <Hero
        imgMinHeight="80vh"
        title="Book Your Next Doctor Visit in Seconds."
        paragraph="CareMate helps you find the best healthcare provider by specialty, location, and more, ensuring you get the care you need."
        imgSrc={doctorsImage}
      />

      <SectionLayout paddingTopMobile="0">
        <FilterBox
          title="Find a doctor at your own ease"
          onSearch={handleSearch}
          onReset={handleReset}>
          <SelectMenus>
            <SelectMenus.SelectCloumn>
              <SelectMenus.Label labelName="Specialty" />
              <SelectMenus.Toggler
                opens="specialty"
                selected={selectedValues["specialty"]}
                icon={<RiStethoscopeLine />}
              />
              <SelectMenus.List listId="specialty">
                {filterData.specialty.map((ele) => (
                  <SelectMenus.Item
                    onClick={() =>
                      setSelectedValues((oldVal) => ({
                        ...oldVal,
                        specialty: ele,
                      }))
                    }>
                    {ele}
                  </SelectMenus.Item>
                ))}
              </SelectMenus.List>
            </SelectMenus.SelectCloumn>

            <SelectMenus.SelectCloumn>
              <SelectMenus.Label labelName="Rating" />
              <SelectMenus.Toggler
                opens="rate"
                selected={selectedValues["rate"]}
                icon={<FaStar />}
              />
              <SelectMenus.List listId="rate">
                {filterData.rate.map((ele) => (
                  <SelectMenus.Item
                    onClick={() =>
                      setSelectedValues((oldVal) => ({
                        ...oldVal,
                        rate: ele,
                      }))
                    }>
                    {ele}
                  </SelectMenus.Item>
                ))}
              </SelectMenus.List>
            </SelectMenus.SelectCloumn>

            <SelectMenus.SelectCloumn>
              <SelectMenus.Label labelName="Experience" />
              <SelectMenus.Toggler
                opens="experience"
                selected={
                  selectedValues["experience"] === "All"
                    ? "All"
                    : `${selectedValues["experience"]["min"]}-${selectedValues["experience"]["max"]} Years`
                }
                icon={<BsHourglassSplit />}
              />
              <SelectMenus.List listId="experience">
                {filterData.experience.map((ele) => (
                  <SelectMenus.Item
                    onClick={() =>
                      setSelectedValues((oldVal) => ({
                        ...oldVal,
                        experience: ele,
                      }))
                    }>
                    {ele === "All" ? ele : `${ele.min}-${ele.max}`}
                  </SelectMenus.Item>
                ))}
              </SelectMenus.List>
            </SelectMenus.SelectCloumn>

            <SelectMenus.SelectCloumn>
              <SelectMenus.Label labelName="Booking Fee" />
              <SelectMenus.Toggler
                opens="fee"
                selected={selectedValues["fee"]}
                icon={<FaDollarSign />}
              />
              <SelectMenus.List listId="fee">
                {filterData.fee.map((ele) => (
                  <SelectMenus.Item
                    onClick={() =>
                      setSelectedValues((oldVal) => ({
                        ...oldVal,
                        fee: ele,
                      }))
                    }>
                    {ele}
                  </SelectMenus.Item>
                ))}
              </SelectMenus.List>
            </SelectMenus.SelectCloumn>
          </SelectMenus>
        </FilterBox>

        <AvailableDoctors filters={appliedFilters} />
      </SectionLayout>
    </>
  );
}

export default Doctors;
