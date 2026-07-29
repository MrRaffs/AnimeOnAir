# Anime On Air

Anime On Air is a Vite + React web app for browsing currently airing anime by day. It uses the [Tenrai API](https://tenrai.org/) to fetch weekly schedule data, deduplicates the results, and sorts anime by popularity so the most relevant shows appear first.

## Features

- View anime schedules for each day of the week.
- Automatically loads all available paginated results from the Tenrai API.
- Filters duplicate anime entries before rendering.
- Sorts anime by popularity.
- Responsive card grid for browsing titles and cover images.

## Tech Stack

- React 19
- Vite
- React Router
- Axios
- Tailwind CSS

## [Tenrai API](https://tenrai.org/)

The app currently calls the [Tenrai](https://tenrai.org/) endpoint directly:

```text
https://api.tenrai.org/v1/
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the Vite URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

- `npm run dev` - start the development server.
- `npm run build` - create a production build.
- `npm run preview` - preview the production build locally.
- `npm run lint` - run ESLint.

## Notes

- The current Anime Detail page is a placeholder and can be expanded later.
- The UI is styled with Tailwind CSS utilities and a small custom theme in `src/index.css`.
