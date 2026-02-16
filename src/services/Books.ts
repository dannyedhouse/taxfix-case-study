import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  isbn?: string[];
  cover_i?: number;
  publisher?: string[];
  language?: string[];
  number_of_pages_median?: number;
}

export interface SearchResponse {
  numFound: number;
  start: number;
  numFoundExact: boolean;
  docs: Book[];
}

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
  }),
});

export const { useSearchBooksQuery } = openLibraryApi;
