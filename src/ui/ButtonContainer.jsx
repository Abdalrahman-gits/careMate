import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;

  flex-direction: ${({ direction = "horizontal" }) =>
    direction === "vertical" ? "column" : "row"};
`;

export default ButtonContainer;
