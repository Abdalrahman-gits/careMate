import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import LandingImage from "../assets/Landing.png";
import Hero from "../ui/Hero";
import Button from "../ui/Button";
import styled from "styled-components";
import { FaRegCalendarCheck } from "react-icons/fa6";

const CustomButton = styled(Button)`
  @media (max-width: 990px) {
    margin: 0 auto;
  }
`;

function Landing() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <Hero
      title="Health in Your Hands."
      paragraph="Take control of your healthcare with CareMate. Book appointments
              with ease, explore health blogs, and stay on top of your
              well-being, all in one place."
      imgSrc={LandingImage}>
      {!isAuthenticated && (
        <CustomButton
          variation="whiteBtn"
          size="large"
          onClick={() => navigate("/auth")}>
          Get Started
        </CustomButton>
      )}

      {isAuthenticated && (
        <CustomButton
          variation="whiteBtn"
          size="large"
          onClick={() => navigate("/doctors")}>
          Book Now <FaRegCalendarCheck />
        </CustomButton>
      )}
    </Hero>
  );
}

export default Landing;
