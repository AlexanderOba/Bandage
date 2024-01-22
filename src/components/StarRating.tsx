"use client"
import { StarRatingType } from '@/types/Product';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export default function StarRating({ratings}: StarRatingType) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={ratings}
        readOnly={ratings !== null} 
        size="medium"
        sx={{
            color: "#F3CD03",
        }}
      />
    </Box>
  );
}