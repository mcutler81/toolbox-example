import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    dob: '1980-01-01',
    phone: '123-456-7890',
    photo: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1390595209i/2451961.jpg',
    notes: 'Some notes about John Doe...'
  };

  return (
    <div>
      <img src={user.photo} alt="User" />
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Date of Birth: {user.dob}</p>
      <p>Phone: {user.phone}</p>
      <p>Notes: {user.notes}</p>
    </div>
  );
};

export default UserProfile;
