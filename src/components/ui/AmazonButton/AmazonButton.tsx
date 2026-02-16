import styled from "styled-components";
import { Search as SearchIcon } from "lucide-react";

const StyledAmazonButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  background-color: #ff9900;
  color: #000000;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-sm);
  border: 1px solid #e88b00;
  transition: all 0.2s ease;
  align-self: flex-start;

  &:hover {
    background-color: #f59000;
    border-color: #e88b00;
  }

  &:active {
    background-color: #e88b00;
  }
`;

interface AmazonButtonProps {
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children?: React.ReactNode;
}

export const AmazonButton = ({
  href,
  onClick,
  children,
}: AmazonButtonProps) => {
  return (
    <StyledAmazonButton
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
    >
      <SearchIcon size={14} />
      {children || "Search on Amazon"}
    </StyledAmazonButton>
  );
};
