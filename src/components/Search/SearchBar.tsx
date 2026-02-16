import styled from "styled-components";
import { Search, X } from "lucide-react";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 12px 20px;
  gap: 12px;
  transition: background-color 0.2s ease;

  &:focus-within {
    background-color: #ebebeb;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  color: #1a1a1a;

  &::placeholder {
    color: #999;
  }
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #154618;
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
