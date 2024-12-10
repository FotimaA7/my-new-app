import React, { useState, useEffect, useMemo } from "react";
import "./../styles/CachedUsers.css";

const CachedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const cachedData = useMemo(() => users, [users]);

  useEffect(() => {
    if (cachedData.length === 0) {
      const fetchUsers = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      };
      fetchUsers();
    }
  }, [cachedData]);

  return (
    <div className="cached-users">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cachedData.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CachedUsers;
