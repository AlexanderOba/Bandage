"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function StarRating({ratings}) {
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