import styled from "styled-components";
import type { Book } from "../../services/Books";
import { BookSkeletonList } from "./BookSkeleton";
import { generateAmazonSearchUrl } from "../../utils/generateAmazonLink";
import { AmazonButton } from "../ui/AmazonButton/AmazonButton";

const ListContainer = styled.div`
  width: 100%;
  padding: var(--spacing-xs);
`;

const BookItem = styled.div`
  display: flex;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background-color: var(--color-bg-white);
  transition: background-color 0.2s ease;
  border-radius: var(--radius-md);

  &:hover {
    background-color: var(--color-bg-gray-light);
  }

  &:not(:last-child) {
    margin-bottom: var(--spacing-sm);
  }

  &:focus-visible {
    outline: 2px solid var(--color-dark-green);
    outline-offset: -2px;
    background-color: var(--color-bg-gray-light);
  }
`;

const BookCover = styled.div`
  width: 80px;
  height: 120px;
  flex-shrink: 0;
  background-color: var(--color-bg-skeleton);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-tertiary);
  font-size: 11px;
`;

const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

const BookTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
`;

const BookAuthor = styled.p`
  font-size: 15px;
  color: var(--color-text-secondary);
  margin: 0;
`;

const BookDetails = styled.p`
  font-size: 14px;
  color: var(--color-text-tertiary);
  margin: 0;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-2xl) var(--spacing-md);
  color: var(--color-text-secondary);
  font-size: 15px;
`;

const ErrorState = styled.div`
  text-align: center;
  padding: var(--spacing-2xl) var(--spacing-md);
  color: var(--color-error);
  font-size: 15px;
`;

interface BookListProps {
  books?: Book[];
  isLoading?: boolean;
  isError?: boolean;
  searchQuery?: string;
}

export const BookList = ({
  books,
  isLoading,
  isError,
  searchQuery,
}: BookListProps) => {
  if (isLoading) {
    return (
      <ListContainer>
        <BookSkeletonList count={5} />
      </ListContainer>
    );
  }

  if (isError) {
    return (
      <ListContainer>
        <ErrorState>
          Sorry, there was an error loading the books. Please try again.
        </ErrorState>
      </ListContainer>
    );
  }

  if (!books || books.length === 0) {
    if (searchQuery) {
      return (
        <ListContainer>
          <EmptyState>
            No books found for "{searchQuery}". Try a different search term.
          </EmptyState>
        </ListContainer>
      );
    }
    return null;
  }

  return (
    <ListContainer>
      {books.map((book) => (
        <BookItem key={book.key} role="option" tabIndex={0}>
          <BookCover>No Cover</BookCover>
          <BookInfo>
            <BookTextContent>
              <BookTitle>{book.title}</BookTitle>
              {book.author_name && book.author_name.length > 0 && (
                <BookAuthor>Author: {book.author_name.join(", ")}</BookAuthor>
              )}
              {book.first_publish_year && (
                <BookDetails>First published: {book.first_publish_year}</BookDetails>
              )}
            </BookTextContent>
            <AmazonButton
              href={generateAmazonSearchUrl(book)}
              onClick={(e) => e.stopPropagation()}
            />
          </BookInfo>
        </BookItem>
      ))}
    </ListContainer>
  );
};
