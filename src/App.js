import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Users from "./components/Users";
import Posts from "./components/Posts";
import UserPosts from "./components/UserPosts";
import FetchWithRetry from "./components/FetchWithRetry";

import "./styles/global.css"; // Global CSS for base styles
import "./styles/Header.css"; // Header-specific styles
import "./styles/Navbar.css"; // Navbar-specific styles
import "./styles/MainPage.css"; // Custom styles for MainPage

const MainPage = () => {
  return (
    <div>
      <header className="header">
        <h1>API Data Explorer</h1>
        <p>Explore, fetch, and analyze API data with ease.</p>
      </header>
      <div className="navigation-links">
        <Link to="/users" className="nav-card">Users</Link>
        <Link to="/posts" className="nav-card">Posts</Link>
        <Link to="/user-posts" className="nav-card">User Posts</Link>
        <Link to="/fetch-retry" className="nav-card">Fetch with Retry</Link>
        <Link to="/search-posts" className="nav-card">Search Posts</Link>
        <Link to="/infinite-scroll" className="nav-card">Infinite Scroll</Link>
        <Link to="/cached-users" className="nav-card">Cached Users</Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">API Explorer</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/user-posts">User Posts</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/user-posts" element={<UserPosts />} />
          <Route path="/fetch-retry" element={<FetchWithRetry />} />
          {/* Add other components here */}
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 API Data Explorer. Built with ❤️</p>
        </footer>
      </div>
    </AuthProvider>
  );
};

export default App;
