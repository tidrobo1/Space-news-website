# Space News Website

A modern, responsive web application that aggregates and displays space-related news articles from the Spaceflight News API. Built with Next.js, TypeScript, and React.

## Features

- **Real-time News Aggregation**: Displays 9,000+ space-related articles with live updates from the Spaceflight News API
- **Advanced Search**: Full-text search functionality to filter articles by title and content
- **Dual View Modes**: Toggle between grid and table layouts for optimal viewing experience
- **Responsive Design**: Fully responsive interface optimized for mobile, tablet, and desktop devices
- **Dynamic Pagination**: Efficient data loading with customizable page sizes
- **Error Handling**: Robust error handling with fallback mechanisms for missing images and failed API calls
- **Statistics Dashboard**: View article counts and search statistics in real-time

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: React 18
- **Component Library**: Ant Design
- **Styling**: CSS with responsive design patterns
- **API**: RESTful integration with Spaceflight News API

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tidrobo1/Space-news-website.git
cd Space-news-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ArticleCard.tsx     # Grid view article card
│   ├── ArticleList.tsx     # Article list container
│   ├── ArticleSearch.tsx   # Search functionality
│   ├── ArticleTable.tsx    # Table view component
│   └── ArticleStatistics.tsx
├── layout/             # Layout components
│   ├── header.tsx         # Navigation header
│   └── layout.tsx         # Main layout wrapper
├── pages/              # Next.js pages
│   ├── index.tsx          # Home page
│   ├── news/index.tsx     # News listing page
│   └── about.tsx          # About page
├── types/              # TypeScript type definitions
└── theme/              # Theme configuration
```

## Key Features Implementation

### Search Functionality
Implemented client-side search with real-time filtering of articles based on title and summary content.

### Pagination
Custom pagination system that efficiently handles large datasets with configurable items per page.

### View Switching
Users can toggle between grid and table views, with preferences maintained during the session.

### API Integration
RESTful API integration with proper error handling, loading states, and image fallback mechanisms.

## Performance Optimizations

- Efficient data fetching with Next.js API routes
- Image optimization with fallback for missing images
- Component-level code splitting
- TypeScript for type safety and better developer experience

## Future Enhancements

- [ ] Add bookmarking functionality
- [ ] Implement article filtering by category
- [ ] Add dark mode theme
- [ ] Server-side rendering for improved SEO
- [ ] Add unit and integration tests

## Author

Thomas Idrobo

## License

MIT License
