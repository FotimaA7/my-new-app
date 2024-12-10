import React, { useState, useEffect } from 'react';

// Spinner Component
const Spinner = () => (
  <div className="spinner">
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

const FetchData = () => {
  const [userData, setUserData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch user data
  const fetchUsers = () => {
    setLoadingUsers(true);
    setError(null); // Reset any previous errors
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setLoadingUsers(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoadingUsers(false);
      });
  };

  // Function to fetch post data
  const fetchPosts = () => {
    setLoadingPosts(true);
    setError(null); // Reset any previous errors
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        return response.json();
      })
      .then((data) => {
        setPostData(data);
        setLoadingPosts(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoadingPosts(false);
      });
  };

  // Fetch data on component mount using useEffect
  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {loadingUsers && <Spinner />} {/* Show loading spinner while loading users */}
      {error && !loadingUsers && (
        <div>
          <p>Error: {error}</p>
          <button onClick={fetchUsers}>Retry Users Fetch</button>
        </div>
      )}
      {!loadingUsers && !error && userData && (
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}

      <h2>Posts List</h2>
      {loadingPosts && <Spinner />} {/* Show loading spinner while loading posts */}
      {error && !loadingPosts && (
        <div>
          <p>Error: {error}</p>
          <button onClick={fetchPosts}>Retry Posts Fetch</button>
        </div>
      )}
      {!loadingPosts && !error && postData && (
        <ul>
          {postData.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchData;
