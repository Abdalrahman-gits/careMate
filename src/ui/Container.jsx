import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: var(--container-sm-pd);
  padding-right: var(--container-sm-pd);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  /* font-size: 1.4rem; */

  @media (min-width: 786px) {
    & {
      padding-left: var(--container-md-pd);
      padding-right: var(--container-md-pd);

      /* font-size: inherit; */
    }
  }

  @media (min-width: 991px) {
    & {
      padding-left: var(--container-lg-pd);
      padding-right: var(--container-lg-pd);
      padding-top: 3.6rem;
      padding-bottom: 3.6rem;

      /* font-size: inherit; */
    }
  }
`;

export default Container;
