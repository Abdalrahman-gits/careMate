import styled from "styled-components";
import defaultImg from "../../assets/default-user.jpg";
import { useAuth } from "../../contexts/AuthContext";

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
    font-weight: 600;
    font-size: 1.4rem;

    @media (min-width: 991px) {
      display: inline;
    }
  }
`;

function UserAvatar() {
  const { user } = useAuth();
  const metaData = user?.user?.user_metadata || {};

  return (
    <StyledAvatar>
      <img src={metaData.avatar || defaultImg} alt="alt-image" />
      <span>{metaData.name}</span>
    </StyledAvatar>
  );
}

export default UserAvatar;
