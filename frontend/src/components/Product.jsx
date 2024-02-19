import React, { useState, useRef } from 'react';
import { Typography } from '@mui/material';

const Product = ({ image, hoverImage, description, altImage, artisan, price, dimensions }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
    <div className="product">
      <div className="product-image-container">
        <img src={image} alt={altImage} className="product-image" />
        <img src={hoverImage} alt={altImage} className="product-hover-image" />
      </div>
      <div className="product-description" style={{ width: '80%', textAlign: 'left' }}>
        <Typography variant="subtitle1" style={{ color: '#134929', fontWeight: 'bold' }}>
          {description}
        </Typography>
      </div>

      <div className="product-artisan" style={{ width: '80%', textAlign: 'left' }}>
      <Typography variant="subtitle1" style={{ color: '#134929' }}>{artisan}</Typography>
      </div>
      <div className="product-price" style={{ width: '80%', textAlign: 'left' }}>
      <Typography variant="subtitle1" style={{ color: '#134929' }}>Price: {price}</Typography>
      </div>
      <div className="product-dimensions" style={{ width: '80%', textAlign: 'left' }}>
      <Typography variant="subtitle1" style={{ color: '#134929' }}>Dimensions: {dimensions}</Typography>
      </div>
    </div>
  );
};

export default Product;