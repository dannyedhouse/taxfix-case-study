import styled from "styled-components";
import { Search, X } from "lucide-react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #e3e3e3;
  border-radius: 2px;
  padding: var(--spacing-sm) var(--spacing-lg);
  gap: var(--spacing-sm);
  transition: background-color 0.2s ease;

  &:focus-within {
    background-color: #d4d4d4;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: var(--color-text-primary);

  &::placeholder {
    color: var(--color-text-placeholder);
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-dark-green);
  flex-shrink: 0;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #0d2e0f;
  }
`;

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  showClearButton: boolean;
  isExpanded: boolean;
}

export const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  onClear,
  showClearButton,
  isExpanded,
}: SearchBarProps) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Quick search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        role="combobox"
        aria-expanded={isExpanded}
        aria-controls="search-results"
        aria-autocomplete="list"
        aria-label="Search for books"
      />
      <SearchIconWrapper
        onClick={showClearButton ? onClear : undefined}
        aria-label={showClearButton ? "Clear search" : "Search"}
      >
        {showClearButton ? <X size={22} /> : <Search size={22} />}
      </SearchIconWrapper>
    </SearchContainer>
  );
};
