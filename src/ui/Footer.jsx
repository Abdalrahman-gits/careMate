import { FaPhoneAlt } from "react-icons/fa";
import styled from "styled-components";
import Container from "./Container";
import { IoLogoWhatsapp } from "react-icons/io";

const StyledFooter = styled.footer`
  padding-block: 2.4rem;
  border-top: 1px solid var(--footer-border-color);
`;

const FlexConatiner = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled.div`
  font-size: 1.4rem;
  color: var(--color-muted);
  letter-spacing: -1px;
`;

const FooterIcons = styled.div`
  color: var(--primary-green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  & svg {
    cursor: pointer;
  }

  & svg:last-child {
    font-size: 1.829rem;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <FlexConatiner>
        <FooterText>
          <p>&copy; EmScripts 2024. All Right Reserved.</p>
        </FooterText>

        <FooterIcons>
          <FaPhoneAlt />
          <IoLogoWhatsapp />
        </FooterIcons>
      </FlexConatiner>
    </StyledFooter>
  );
}

export default Footer;
