import { generateAmazonSearchUrl } from "./generateAmazonLink";
import { cleanDescription } from "./cleanBookDescription";
import type { BookDetails, AuthorDetails } from "../types/Book.type";

interface ProcessedBookData {
  authors: string[];
  description?: string;
  amazonUrl: string;
  openLibraryUrl: string;
  coverId?: number;
}

export const processBookData = (
  bookData: BookDetails,
  firstAuthorData?: AuthorDetails,
): ProcessedBookData => {
  const authors =
    bookData?.authors?.map((author, idx) => {
      if (idx === 0 && firstAuthorData) {
        return firstAuthorData.name;
      }
      const authorId = author.author.key.split("/").pop();
      return authorId || `Author ${idx + 1}`;
    }) || [];

  const rawDescription =
    typeof bookData.description === "string"
      ? bookData.description
      : bookData.description?.value;
  const description = cleanDescription(rawDescription);

  const bookForAmazon = {
    key: bookData.key,
    title: bookData.title,
    author_name: firstAuthorData ? [firstAuthorData.name] : undefined,
  };
  const amazonUrl = generateAmazonSearchUrl(bookForAmazon);
  const openLibraryUrl = `https://openlibrary.org${bookData.key}`;

  const coverId = bookData.covers?.[0];

  return {
    authors,
    description,
    amazonUrl,
    openLibraryUrl,
    coverId,
  };
};
