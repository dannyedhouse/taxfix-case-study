import styled from "styled-components";
import { ExternalLink } from "lucide-react";

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm) var(--spacing-lg);
  background-color: var(--color-dark-green);
  color: var(--color-bg-white);
  text-decoration: none;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: #0d2e0f;
    transform: translateY(-1px);
  }
`;

interface ExternalLinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export const ExternalLinkButton = ({ href, children }: ExternalLinkButtonProps) => {
  return (
    <StyledButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={16} />
      {children}
    </StyledButton>
  );
};
