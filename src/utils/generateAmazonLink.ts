import type { Book } from "../services/Books";

export const generateAmazonSearchUrl = (
  book: Pick<Book, "title" | "author_name">,
) => {
  const searchQuery =
    book.author_name && book.author_name.length > 0
      ? `${book.title} ${book.author_name[0]}`
      : book.title;
  return `https://www.amazon.co.uk/s?k=${encodeURIComponent(searchQuery)}`;
};
