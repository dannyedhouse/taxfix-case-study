import styled from "styled-components";
import type { Book } from "../../services/Books";
import { BookSkeletonList } from "./BookSkeleton";

const ListContainer = styled.div`
  width: 100%;
  padding: 8px;
`;

const BookItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background-color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  &:focus-visible {
    outline: 2px solid #154618;
    outline-offset: -2px;
    background-color: #f9f9f9;
  }
`;

const BookCover = styled.div`
  width: 60px;
  height: 80px;
  flex-shrink: 0;
  background-color: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 12px;
`;

const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BookTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #154618;
  margin: 0 0 4px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BookAuthor = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BookDetails = styled.p`
  font-size: 13px;
  color: #999;
  margin: 4px 0 0 0;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 32px 16px;
  color: #666;
  font-size: 15px;
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 32px 16px;
  color: #e74c3c;
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
            <BookTitle>{book.title}</BookTitle>
            {book.author_name && book.author_name.length > 0 && (
              <BookAuthor>by {book.author_name.join(", ")}</BookAuthor>
            )}
            <BookDetails>
              {book.first_publish_year &&
                `First published: ${book.first_publish_year}`}
              {book.publisher &&
                book.publisher.length > 0 &&
                ` • ${book.publisher[0]}`}
            </BookDetails>
          </BookInfo>
        </BookItem>
      ))}
    </ListContainer>
  );
};
