import React, { useState, useEffect } from 'react';
import UserProfile from './UserProfile';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/users', (req, res) => {
  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve users' });
    } else {
      res.json(results.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

  
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
