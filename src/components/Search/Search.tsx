import styled from "styled-components";
import { useSearch } from "../../hooks/useSearch";
import { SearchBar } from "./SearchBar";
import { BookList } from "./BookList";

const Overlay = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 50;

  @media (max-width: 768px) {
    top: 130px;
  }
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% + var(--spacing-xs));
  left: 0;
  right: 0;
  background-color: var(--color-bg-white);
  border-radius: 2px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-height: 70vh;
  overflow-y: auto;
  z-index: 1000;

  &::after {
    content: '';
    position: sticky;
    display: block;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    pointer-events: none;
    margin-top: -80px;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  max-width: 500px;
  flex: 1;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Search = () => {
  const {
    searchQuery,
    debouncedSearchValue,
    showResults,
    showLoading,
    data,
    isError,
    handleClose,
    handleSearchChange,
    handleKeyDown,
  } = useSearch();

  return (
    <>
      {showResults && <Overlay onClick={handleClose} />}
      <SearchWrapper>
        <SearchBar
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onClear={handleClose}
          showClearButton={showResults}
          isExpanded={showResults}
        />

        {showResults && (
          <DropdownContainer id="search-results" role="listbox">
            <BookList
              books={data?.docs}
              isLoading={showLoading}
              isError={isError}
              searchQuery={debouncedSearchValue}
            />
          </DropdownContainer>
        )}
      </SearchWrapper>
    </>
  );
};
