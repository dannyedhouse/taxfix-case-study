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

export interface BookDetails {
  title: string;
  description?: string | { value: string };
  covers?: number[];
  authors?: Array<{ author: { key: string } }>;
  subjects?: string[];
  first_publish_year?: number;
  key: string;
  created?: {
    type: string;
    value: string;
  };
  last_modified?: {
    type: string;
    value: string;
  };
  contributions?: string[];
}

export interface AuthorDetails {
  name: string;
  bio?: string | { value: string };
  birth_date?: string;
  death_date?: string;
  photos?: number[];
  key: string;
}
