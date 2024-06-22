import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

const RatingComponent = ({ value, onChange, readOnly = false }) => {
  const [ratings, setRatings] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchRatings();
  }, [id]);
  const fetchRatings = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/reviews/coupons/${id}`);
      setRatings(response.data);
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };
  return (
    <div>
      <Box display="flex" alignItems="center">
        <Rating
          name={`coupon-rating-${id}`}
          value={value}
          precision={0.5}
          onChange={(event, newValue) => onChange(newValue)}
          readOnly={readOnly}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />
        <Box ml={2}>
          <Typography variant="subtitle1">
            {value.toFixed(1)} ({ratings.length} reviews)
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default RatingComponent;