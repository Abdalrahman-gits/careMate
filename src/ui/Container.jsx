import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-left: var(--container-sm-pd);
  padding-right: var(--container-sm-pd);

  @media (min-width: 786px) {
    & {
      padding-left: var(--container-md-pd);
      padding-right: var(--container-md-pd);
    }
  }

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
    }
  }
`;

export default Container;
