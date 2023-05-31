import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

import { sql } from '@vercel/postgres';
 
const likes = 100;
const { rows, fields } = await sql`SELECT * FROM posts WHERE likes > ${likes};`;

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch all users
  useEffect(() => {
    fetch('/api/users') // replace with your API endpoint
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error(error));
  }, []);

  // Fetch data for the selected user
  useEffect(() => {
    if (selectedUserId) {
      fetch(`/api/users/${selectedUserId}`) // replace with your API endpoint
        .then(response => response.json())
        .then(data => setSelectedUser(data))
        .catch(error => console.error(error));
    }
  }, [selectedUserId]);

  return (
    <div className="App">
      <select onChange={e => setSelectedUserId(e.target.value)}>
        <option>Select a user</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      {selectedUser && <UserProfile user={selectedUser} />}
    </div>
  );
}

export default App;
