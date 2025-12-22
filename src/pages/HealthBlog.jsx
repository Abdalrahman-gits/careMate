import BgHealthBlog from "../assets/optimHealthblog.jpg";
import Hero from "../ui/Hero";
import SectionHeader from "../ui/SectionHeader";
import SectionLayout from "../ui/SectionLayout";
import FilterColumn from "../ui/FilterColumn";
import FilterBox from "../ui/FilterBox";
import { RiStethoscopeLine } from "react-icons/ri";
import { BsHourglassSplit } from "react-icons/bs";
import BlogList from "../ui/BlogList";
import { useEffect } from "react";
import toast from "react-hot-toast";

function HealthBlog() {
  useEffect(() => {
    const id = toast("This Page is Read Only due to lack of data", {
      icon: "😊",
      duration: 3000,
    });

    return () => toast.dismiss(id);
  }, []);

  return (
    <>
      <Hero
        imgMinHeight="80vh"
        title="Your Guide to Wellbeing."
        paragraph="Discover expert advice, wellness tips, and the latest trends in healthcare to guide your journey to better health."
        imgSrc={BgHealthBlog}
      />

      <SectionLayout paddingTopMobile="0">
        <FilterBox title="Find Answers to Your Health Questions">
          <FilterColumn label="Category" value="All" icon={RiStethoscopeLine} />
          <FilterColumn label="Date" value="Feb-May" icon={BsHourglassSplit} />
          <FilterColumn label="Keyword" value="2-10 years" type="search" />
        </FilterBox>
        <SectionHeader title="Health Blog" subTitle="Read our latest news." />
        <BlogList />
      </SectionLayout>
    </>
  );
}

export default HealthBlog;
