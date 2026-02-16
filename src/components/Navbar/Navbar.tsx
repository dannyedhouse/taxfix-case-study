import styled from "styled-components";
import { Logo } from "../Logo/Logo";
import { Search } from "../Search/Search";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 70px;
  background-color: var(--color-bg-white);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-4xl);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  gap: var(--spacing-2xl);
  isolation: isolate;

  @media (max-width: 768px) {
    padding: var(--spacing-md) var(--spacing-2xl);
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
      <Search />
    </NavbarContainer>
  );
};
