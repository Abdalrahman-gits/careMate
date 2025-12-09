import styled from "styled-components";
import defaultImg from "../../assets/default-user.jpg";

const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & > img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  & span {
    display: none;

    @media (min-width: 568px) {
      display: inline;
    }
  }
`;

function UserAvatar() {
  return (
    <StyledAvatar>
      <img src={defaultImg} alt="alt-image" />
      <span>Ghozal</span>
    </StyledAvatar>
  );
}

export default UserAvatar;
