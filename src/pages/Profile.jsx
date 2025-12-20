import styled from "styled-components";
import PageTitle from "../ui/PageTitle";
import ProfileForm from "../ui/ProfileForm";
import Container from "../ui/Container";

const StyledProfile = styled.div`
  background-color: var(--bg-card);
  padding-block: 3rem;
  min-height: calc(100vh - var(--header-h-sm));

  @media (min-width: 991px) {
    min-height: calc(100vh - var(--header-h-lg));
  }
`;

const SubTitle = styled.span`
  font-size: 1.4rem;
  color: var(--color-green);
`;

function Profile() {
  return (
    <StyledProfile>
      <Container>
        <div style={{ marginBottom: "3rem" }}>
          <PageTitle>Profile Settings</PageTitle>
          <SubTitle>
            Manage your personal information and account preferences
          </SubTitle>
        </div>

        <ProfileForm />
      </Container>
    </StyledProfile>
  );
}

export default Profile;
