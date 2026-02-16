import styled from "styled-components";
import { Logo } from "../Logo/Logo";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </NavbarContainer>
  );
};
