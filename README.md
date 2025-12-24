# 🎬 MovieManiac

**Your Ultimate Movie Discovery Platform**

---

## 📋 Overview

MovieManiac is a modern, responsive web application that helps movie enthusiasts discover and explore films from The Movie Database (TMDB). Browse through popular movies, top-rated films, and upcoming releases with an intuitive interface featuring advanced filtering and sorting capabilities.

## ✨ Key Features

- 🎯 **Multiple Movie Categories**: Browse Popular, Top Rated, and Upcoming movies
- 🔍 **Advanced Filtering**: Filter movies by minimum rating (6+, 7+, 8+)
- 📊 **Smart Sorting**: Sort movies by release date or rating in ascending/descending order
- 🌙 **Dark Mode**: Toggle between light and dark themes with persistent preference
- 🎨 **Modern UI**: Clean, responsive design optimized for all devices
- 🔗 **External Links**: Direct links to movie details on TMDB
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Rich Movie Details**: View movie posters, ratings, release dates, and descriptions


**Live Demo**: [https://movie-maniac-app.vercel.app/](https://movie-maniac-app.vercel.app/)


## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**
- **TMDB API Key** - Get your free API key from [The Movie Database](https://www.themoviedb.org/settings/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JoeAlNaggar/Movie-Maniac
   cd Movie-Maniac
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. To preview the production build:

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) 19.2.0
- **Build Tool**: [Vite](https://vite.dev/) 7.2.4
- **Routing**: [React Router DOM](https://reactrouter.com/) 7.11.0
- **Utilities**: [Lodash](https://lodash.com/) 4.17.21
- **API**: [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api)
- **Code Quality**: ESLint with React Hooks plugin

## 🌐 Live Preview



## 📁 Project Structure

```
Movie-Maniac/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── Moon.svg
│   │   └── Sun.svg
│   ├── components/
│   │   ├── DarkMode/
│   │   ├── MovieList/
│   │   └── Navbar/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

