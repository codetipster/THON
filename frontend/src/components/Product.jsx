import React, { useState, useRef } from 'react';
import { Typography } from '@mui/material';

const Product = ({ image, hoverImage, description, altImage }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
    <div className="product">
      <div className="product-image-container">
        <img src={image} alt={altImage} className="product-image" />
        <img src={hoverImage} alt={altImage} className="product-hover-image" />
      </div>
      <div className="product-description">
      <Typography variant="subtitle1" style={{ color: '#134929' }}>{description}</Typography>
      </div>
    </div>
  );
};

export default Product;