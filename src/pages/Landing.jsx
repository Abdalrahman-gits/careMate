import { useNavigate } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { useAuth } from "../contexts/AuthContext";

import LandingImage from "../assets/optimLanding.jpg";
import Hero from "../ui/Hero";
import Button from "../ui/Button";
import styled from "styled-components";
import { motion } from "framer-motion";

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
      paragraph={
        "Take control of your healthcare with CareMate. " +
        "Book appointments with ease, explore health blogs, " +
        "and stay on top of your well-being, all in one place."
      }
      imgSrc={LandingImage}>
      <CustomButton
        variation="whiteBtn"
        size="large"
        as={motion.button}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 151 * 0.02 } }}
        onClick={() =>
          isAuthenticated ? navigate("/doctors") : navigate("/auth/login")
        }>
        {isAuthenticated && (
          <>
            Book Now <FaRegCalendarCheck />
          </>
        )}
        {!isAuthenticated && "Get Started"}
      </CustomButton>
    </Hero>
  );
}

export default Landing;
