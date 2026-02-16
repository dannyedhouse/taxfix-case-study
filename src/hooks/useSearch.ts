import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import { useSearchBooksQuery } from "../services/Books";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setSearchQuery, clearSearchQuery } from "../store/slices/searchSlice";

const MIN_SEARCH_CHARS = 3;
const DEBOUNCE_DELAY = 300;

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  const debouncedSearchValue = useDebounce(searchQuery, DEBOUNCE_DELAY);
  const [isSearching, setIsSearching] = useState(false);

  const shouldSearch = debouncedSearchValue.trim().length >= MIN_SEARCH_CHARS;
  const hasActiveQuery = searchQuery.trim().length >= MIN_SEARCH_CHARS;
  // Close immediately when searchQuery is cleared, even if debounced value hasn't updated yet
  const showResults = shouldSearch && hasActiveQuery;

  const { data, isLoading, isFetching, isError } = useSearchBooksQuery(
    debouncedSearchValue.trim(),
    {
      skip: !shouldSearch || !hasActiveQuery, // Skip if query is cleared
    }
  );

  // Track when search query changes to show loading state
  useEffect(() => {
    // Immediately clear searching state if query is empty
    if (searchQuery.trim().length === 0) {
      setIsSearching(false);
      return;
    }
    
    const hasMinChars = searchQuery.trim().length >= MIN_SEARCH_CHARS;
    // Only show searching state if user is actively typing
    if (hasMinChars && shouldSearch && searchQuery !== debouncedSearchValue) {
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  }, [searchQuery, debouncedSearchValue, shouldSearch]);

  // Only show loading if we have an active query
  const showLoading = hasActiveQuery && (isLoading || isFetching || isSearching);

  const handleClose = () => {
    dispatch(clearSearchQuery());
  };

  const handleSearchChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      if (searchQuery) {
        handleClose();
      }
    }
  };

  return {
    searchQuery,
    debouncedSearchValue,
    showResults,
    showLoading,
    data,
    isError,
    handleClose,
    handleSearchChange,
    handleKeyDown,
  };
};
