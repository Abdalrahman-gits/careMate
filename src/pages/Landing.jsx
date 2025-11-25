import LandingImage from "../assets/Landing.png";
import Hero from "../ui/Hero";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <Hero
      title="Health in Your Hands."
      paragraph="Take control of your healthcare with CareMate. Book appointments
              with ease, explore health blogs, and stay on top of your
              well-being, all in one place."
      imgSrc={LandingImage}>
      <Button
        variation="whiteBtn"
        size="large"
        onClick={() => navigate("auth")}>
        Get Started
      </Button>
    </Hero>
  );
}

export default Landing;
