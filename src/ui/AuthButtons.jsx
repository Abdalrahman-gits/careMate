import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  flex-direction: ${({ direction = "horizontal" }) =>
    direction === "vertical" ? "column" : "row"};
`;

function AuthButtons({ direction }) {
  const navigate = useNavigate();

  return (
    <ButtonContainer direction={direction}>
      <Button
        variation="bordered"
        onClick={(e) => {
          e.preventDefault();
          navigate("auth/login");
        }}>
        login
      </Button>
      <Button
        variation="primary"
        onClick={(e) => {
          e.preventDefault();
          navigate("auth/register");
        }}>
        register
      </Button>
    </ButtonContainer>
  );
}

export default AuthButtons;
