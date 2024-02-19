import React, { useState, useRef } from 'react';
import { Typography } from '@mui/material';

const Artisan = ({ image, name, city }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
    <div className="artisan">
      <div className="artisan-image-container">
        <img src={image} alt="artisan image" className="artisan-image" />
      </div>

      <div className="artisan-name" style={{ width: '80%', textAlign: 'left' }}>
      <Typography variant="subtitle1" style={{ color: '#134929' }}>{name}</Typography>
      </div>
      <div className="artisan-city" style={{ width: '80%', textAlign: 'left' }}>
      <Typography variant="subtitle1" style={{ color: '#134929' }}> {city}</Typography>
      </div>
    </div>
  );
};

export default Artisan;