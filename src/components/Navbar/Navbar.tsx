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
    flex-wrap: wrap;
    height: auto;
    padding: var(--spacing-md) var(--spacing-2xl);
    justify-content: center;
    gap: var(--spacing-md);
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

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    justify-content: center;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    order: 2;
    width: 100%;
    justify-content: stretch;
  }
`;

export const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchWrapper>
        <Search />
      </SearchWrapper>
    </NavbarContainer>
  );
};
