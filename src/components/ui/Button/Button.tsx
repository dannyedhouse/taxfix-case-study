import styled from "styled-components";
import { CircleArrowIcon } from "../CircleArrowIcon/CircleArrowIcon";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<{}>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm) var(--spacing-xs) var(--spacing-xl);
  background-color: var(--color-bg-white);
  color: var(--color-text-primary);
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 48px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 15px;
    padding: var(--spacing-xs) 10px var(--spacing-xs) var(--spacing-lg);
    min-height: 44px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2d5016;
  flex-shrink: 0;
`;

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <span>{children}</span>
      <IconWrapper>
        <CircleArrowIcon size={40} />
      </IconWrapper>
    </StyledButton>
  );
};
