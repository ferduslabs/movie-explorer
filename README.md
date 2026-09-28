# 🎬 MovieExplorer

A responsive Movie Explorer Application built with React. Browse movies, search for specific titles, and view detailed information in an interactive modal.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Screenshots](#screenshots)

## ✨ Features

### Home Page
- **Navbar** — Application logo, navigation links, and Movies CTA button
- **Hero Banner** — Eye-catching hero section with gradient background, title, description, and CTA
- **Features Section** — Highlights of the application (Smart Search, Detailed Info, Fully Responsive)
- **Call-to-Action Section** — Invites users to start browsing
- **Footer** — Application name, copyright, and social links

### Movie Listing Page
- **Search Functionality** — Search movies by title with debounced input
- **Popular Shows** — Top 50 shows sorted by rating on initial load
- **Movie Cards** — Reusable card components with poster, title, year, rating, and genre
- **Responsive Grid** — Adapts from 2 columns on mobile to 5 columns on desktop
- **Loading & Error States** — Proper feedback for different states

### Movie Details Modal
- Backdrop image with gradient overlay
- Movie title, rating, release year, runtime, and status
- Genre tags
- Full overview / summary
- Additional info: Network, Language, Type, Official Site
- Close via ✕ button, Close button, ESC key, or backdrop click
- Smooth animations

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Core** | React 19, JavaScript |
| **Build Tool** | Vite 8 |
| **Routing** | React Router DOM v7 |
| **Styling** | Tailwind CSS v4 |
| **API** | TVMaze API |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd movie-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the app for production |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs the linter |

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Navigation bar
│   ├── Footer.jsx       # Footer component
│   ├── MovieCard.jsx    # Movie card component
│   └── MovieModal.jsx   # Movie details modal
├── pages/               # Page components
│   ├── Home.jsx         # Home page
│   └── Movies.jsx       # Movie listing page
├── App.jsx              # Main app component with routing
├── main.jsx             # Entry point
└── index.css            # Global styles with Tailwind directives
```

## 🔌 API Reference

This project uses the [TVMaze API](https://www.tvmaze.com/api) — a free, no-authentication-required TV show database API.

### Endpoints Used

| Endpoint | Description |
|----------|-------------|
| `GET /shows` | Fetch all TV shows (used for popular shows list) |
| `GET /search/shows?q=:query` | Search shows by name |

Example:
```
https://api.tvmaze.com/shows
https://api.tvmaze.com/search/shows?q=girls
```

No API key is required.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up / log in
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Vite and use default settings
5. Click "Deploy" — done!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up / log in
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy site"

### GitHub Pages

1. Install the `gh-pages` package:
```bash
npm install -D gh-pages
```

2. Add these to `package.json`:
```json
{
  "homepage": "https://<username>.github.io/<repo-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 📸 Screenshots

### Home Page
![Home Page](https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800)

### Movie Listing
Movie grid with search functionality and responsive cards.

### Movie Details Modal
Detailed movie information including overview, rating, genres, and more.

## 📱 Responsive Design

The application is fully responsive and provides a seamless experience across all devices:

- **Mobile**: Single column layout, stacked elements, touch-friendly buttons
- **Tablet**: 2-3 column grid for movie cards
- **Desktop**: 4-5+ column grid, optimized spacing

## 📝 License

This project is for educational purposes.

## 🤝 Acknowledgments

- [TVMaze API](https://www.tvmaze.com/api) for providing the movie data
- [React](https://react.dev/) for the UI framework
- [Vite](https://vite.dev/) for the build tool
- [Tailwind CSS](https://tailwindcss.com/) for styling
