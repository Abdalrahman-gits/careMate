import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
  position: relative;
`;

function AppLayout() {
  return (
    <div>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
