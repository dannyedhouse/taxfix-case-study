import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  Book,
  SearchResponse,
  BookDetails,
  AuthorDetails,
} from "../types/Book.type";

export type { Book, SearchResponse, BookDetails, AuthorDetails };

export const openLibraryApi = createApi({
  reducerPath: "openLibraryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://openlibrary.org",
    prepareHeaders: (headers) => {
      headers.set("User-Agent", "Taxfix Book Search (dannye7899@gmail.com)");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchBooks: builder.query<SearchResponse, string>({
      query: (searchTerm) =>
        `/search.json?q=${encodeURIComponent(searchTerm)}&limit=10`,
      keepUnusedDataFor: 300,
    }),
    getBookDetails: builder.query<BookDetails, string>({
      query: (workId) => `${workId}.json`,
      keepUnusedDataFor: 300,
    }),
    getAuthorDetails: builder.query<AuthorDetails, string>({
      query: (authorId) => `${authorId}.json`,
      keepUnusedDataFor: 300,
    }),
  }),
});

export const {
  useSearchBooksQuery,
  useGetBookDetailsQuery,
  useGetAuthorDetailsQuery,
} = openLibraryApi;
