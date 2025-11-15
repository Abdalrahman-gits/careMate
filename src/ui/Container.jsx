import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 2.6rem;
  padding-bottom: 2.6rem;

  /* font-size: 1.4rem; */

  @media (min-width: 991px) {
    & {
      padding-left: 6rem;
      padding-right: 6rem;
      padding-top: 3.6rem;
      padding-bottom: 3.6rem;

      /* font-size: inherit; */
    }
  }
`;

export default Container;
