import React, { useState } from 'react';
import axios from 'axios';

function App1() {
  const [email, setEmail] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('caption', caption);
    if (image) {
      formData.append('image', image);
    }
    formData.append('date', date);

    try {
      await axios.post('/api/create-user-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('User post created successfully');
    } catch (error) {
      console.error('Error creating user post', error);
    }
  };

  return (
    <div>
      <h1>Create User Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Caption:</label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            accept="image/jpeg,image/png"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App1;
