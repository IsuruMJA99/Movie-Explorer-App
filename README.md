# 🎬 Movie Explorer App

Welcome to the **Movie Explorer App**, a responsive web application that allows users to search for movies, explore trending films, and view detailed movie information in real-time using the TMDb (The Movie Database) API.

## 🚀 Live Demo

🔗 [View Live App](https://movie-explorer-app-steel.vercel.app/)


---

## ✨ Features.
- Embedded YouTube trailers via TMDb links.
- Mobile-first responsive design.
- Favorite movies list.
- Light mode.

### 🔐 User Interface
- Login form (username + password).
- Responsive search bar to look up movies.
- Grid display of movie posters (title, release year, rating).
- Click to view detailed movie info: overview, genres, cast, trailer link, etc.
- Trending movies section on the homepage.
- Light mode.

### 🔗 API Integration
- Integrated with [TMDb API](https://developers.themoviedb.org/3) to fetch:
  - Trending Movies
  - Search Results
  - Movie Details
- Graceful API error handling.
- Infinite scroll for search results or a “Load More” button (optional UX improvement).

### 🧠 State Management
- Global movie state handled using React Context API.
- Persist last searched movie using Local Storage.
- Favorite movies list saved locally for reuse.

---

## ⚙️ Technologies Used

- **React** (vite)
- **Axios** – For API requests
- **React Router** – For page navigation
- **TMDb API** – Source for movie data
- **LocalStorage** – To store favorites and last search
- **Vercel** – Deployment platform

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

git clone https://github.com/IsuruMJA99/Movie-Explorer-App.git
cd movie-explorer-app

### 2. Install Dependencies
npm install

### 1. Run the App Locally
npm run dev




