# Taxfix Take Home Task

A book search application built with React that integrates with the Open Library API to search books and display detailed information.

Uses - https://openlibrary.org/developers/api

## Installation

- Install dependencies: `pnpm i`

- Start development server: `pnpm run dev`

- Build for production: `pnpm build`

## Main Dependencies

- **Redux Toolkit** - State management and RTK Query for API calls

- **React Router** - For client-side routing

- **styled-components** - CSS-in-JS styling solution

- **Lucide React** - Icon library

## Decisions

**Architecture**

- Created a useSearch hook to encapsulate searching logic

- Created a data processing utilities to keep components clean

**Performance**

- Debounced search input for 300ms to minimize API calls

- Skeleton loaders for better perceived performance (and loading spinner for book covers)

- Limit search results to 10 to prevent expensive calls

- RTK Query caching of 5 minutes

**UX/Accessibility**

- Focus trap in search results dropdown with ability to exit with escape key, clicking outside

- Overlay darkens content when search is active

**Styling**

- CSS variables for consistent theming

- Mobile-responsive design with media queries

---

## Future Improvements

- Tests! with Vitest, e.g. mocking book list results.

- Add pagination for search results (currently limited to 10)

- Add favorites/bookmark functionality with local storage

- Perhaps extract styling into seperate files to keep components smaller, and look into theming.
