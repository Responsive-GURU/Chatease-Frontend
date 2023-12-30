import React, { useState } from 'react';
import axios from 'axios';

const AddPostForm: React.FC = () => {
  const [caption, setCaption] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('date', date);
    formData.append('image', image!);
    formData.append('userName', userName);
    formData.append('userId', userId);
    formData.append('email', email);

    try {
      await axios.post('/chatease/userpost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Post added successfully');
      // Reset form values after successful submission
      setCaption('');
      setDate('');
      setImage(null);
      setUserName('');
      setUserId('');
      setEmail('');
    } catch (error) {
      console.error('Error adding post', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Caption:</label>
        <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <div>
        <label>User Name:</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;
