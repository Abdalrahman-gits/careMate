import LandingImage from "../assets/Landing.png";
import Hero from "../ui/Hero";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CustomButton = styled(Button)`
  @media (max-width: 990px) {
    margin: 0 auto;
  }
`;

function Landing() {
  const navigate = useNavigate();
  return (
    <Hero
      title="Health in Your Hands."
      paragraph="Take control of your healthcare with CareMate. Book appointments
              with ease, explore health blogs, and stay on top of your
              well-being, all in one place."
      imgSrc={LandingImage}>
      <CustomButton
        variation="whiteBtn"
        size="large"
        onClick={() => navigate("auth")}>
        Get Started
      </CustomButton>
    </Hero>
  );
}

export default Landing;
