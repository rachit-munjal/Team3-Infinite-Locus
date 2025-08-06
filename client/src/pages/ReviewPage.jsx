import React, { useState } from 'react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';

import './review.css';

const ReviewPage = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      alert('Review cannot be empty!');
      return;
    }

    const formData = new FormData();
    formData.append('reviewText', reviewText);
    formData.append('rating', rating);
    if (image) formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/submit-review', formData);
      alert('Review submitted successfully!');
      console.log(res.data);

      setReviewText('');
      setRating(0);
      setImage(null);
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <form  onSubmit={handleSubmit} id="form" encType="multipart/form-data">
      <h2>Write a Review</h2>
      {/* <p>
        You're reviewing: <strong>{business.replace(/-/g, ' ')}</strong> under{' '}
        <strong>{category}</strong>
      </p> */}

      <textarea
        className="textarea"
        rows="5"
        placeholder="Enter your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        required
      />

      <div style={{ marginBottom: '10px' }}>
        <strong>Rating:</strong>{' '}
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              cursor: 'pointer',
              color: star <= rating ? '#ffc107' : '#ccc',
              fontSize: '20px'
            }}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        style={{ marginBottom: '15px' }}
      />

      {image && (
        <div className="preview">
          <img src={URL.createObjectURL(image)} alt="Preview" width="100" />
        </div>
      )}

      <button type="submit" className="button">
        Submit
      </button>
    </form>
  );
};

export default ReviewPage;