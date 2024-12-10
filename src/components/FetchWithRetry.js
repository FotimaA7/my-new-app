import React, { useState } from 'react';

const FetchWithRetry = () => {
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      setError(false);
      const response = await fetch('https://jsonplaceholder.typicode.com/invalid-endpoint');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="fetch-with-retry">
      {error ? (
        <div>
          <p>Error fetching data. Please try again.</p>
          <button onClick={fetchData}>Retry</button>
        </div>
      ) : data ? (
        <p>Data fetched successfully!</p>
      ) : (
        <button onClick={fetchData}>Fetch Data</button>
      )}
    </div>
  );
};

export default FetchWithRetry;
