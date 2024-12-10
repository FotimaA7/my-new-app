import React, { useState, useEffect } from "react";

const DebouncedSearch = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm) {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${searchTerm}`)
          .then((response) => response.json())
          .then((data) => {
            setPosts(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching posts:", error);
            setLoading(false);
          });
      } else {
        setPosts([]);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(debounceTimer); // Cleanup on input change
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Posts</h2>
      <input
        type="text"
        placeholder="Search posts by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DebouncedSearch;
