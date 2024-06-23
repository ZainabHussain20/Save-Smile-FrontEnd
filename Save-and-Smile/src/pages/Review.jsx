import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RatingComponent from '../components/Rating';
import { useParams } from 'react-router-dom';

const Review = () => {
  const { id } = useParams();
  const [coupon, setCoupon] = useState([]);
  const [form, setForm] = useState({
    userName: '',
    rating: 0,
    comment: '',
    coupon: id
  });
  const [ratings, setRatings] = useState([]);
  

  useEffect(() => {
    getCoupon();
    fetchRatings();
  }, [id]);

  
  const getCoupon = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/coupons/${id}`);
      setCoupon(response.data);
    } catch (error) {
      console.error('Error fetching coupon:', error);
    }
  };

  const fetchRatings = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/reviews/coupons/${id}`);
      setRatings(response.data);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.id]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response= await axios.post(`http://localhost:3000/reviews`, form);
      console.log('Review submitted:', response.data);
      setRatings([...ratings, response.data]);
      setForm({ coupon: id, userName: '', rating: 0, comment: '' });
      } catch (error) {
      console.error('Error submitting review:', error.response ? error.response.data : error.message);
    }
  };

    const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/reviews/${id}`);
      fetchRatings() 
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };
  
  if (!coupon) {
    return <div>Loading coupon...</div>;
  }

  return (
    <div className="Coupons">
      <h2>Customer Review</h2>
      <section className="Review-container">
        <div key={coupon._id} className="Reviewcard">
          <img src={coupon.img} alt={coupon.title} />
          <section>
            <h3>Name: {coupon.title}</h3>
            <p>Discount: {coupon.discount}</p>
            <p>Description: {coupon.description}</p>
          </section>
        </div>
      </section>
      <form className="CouponForm" onSubmit={handleSubmit}>
        <label htmlFor="userName">User Name:</label>
        <input
          id="userName"
          type="text"
          onChange={handleChange}
          value={form.userName}
          required
        />
        <label htmlFor="rating">Rating:</label>
        <RatingComponent
          value={form.rating}
          onChange={(newValue) => setForm({ ...form, rating: newValue })}
        />
        <label htmlFor="comment">Review:</label>
        <textarea
          id="comment"
          onChange={handleChange}
          type="text"
          value={form.comment}
          required
        />
        <label htmlFor="coupon"></label>
        <input
          id="coupon"
          type="hidden"
          onChange={handleChange}
          value={form.coupon}
        />
        <button type="submit">Submit Review</button>
      </form>
      <div className="Reviews-container">
        {ratings.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          <ul>
            {ratings.map((review) => (
              <li key={review._id}>
                <p>User: {review.userName}</p>
                <RatingComponent value={review.rating} readOnly />
                <p>{review.comment}</p>
                <button onClick={() => handleDelete(review._id)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Review;