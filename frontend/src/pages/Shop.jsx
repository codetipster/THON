import Header from '../components/Header.jsx'
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import artisanBImage from "../assets/images/recropped.jpg";
import Product from '../components/Product';

export const Shop = () => {
  const carpets = [
    {
      name: "Carpet A",
      description: "Each product should have a short story or description",
      image: artisanBImage, // A sample image of pottery
    },
    {
      name: "Carpet B",
      description: "Each product should have a short story or description",
      image: artisanBImage, // A sample image of textiles
    },
    {
      name: "Carpet C",
      description: "Each product should have a short story or description",
      image: artisanBImage, // Placeholder, replace with actual image paths
    },
    
  ];
  return (
    <div> 
      <Header />
      <section style={{ width: '100%', margin: '0 auto'}} >
    <Typography variant="h4" gutterBottom style={{ fontFamily: "Xanh Mono monospace", color: "#134929", marginTop: '3rem', textAlign: 'left',  marginLeft: "1.5rem", fontSize: '25px'}}>
      Atelier
    </Typography>
    <Typography variant="h5" gutterBottom className='gradient-text' style={{fontFamily: "Xanh Mono monospace", fontSize: '50px', marginBottom: '1.75rem'}}> 
       For her, For the Earth.
    </Typography>
   <div className='flex justify-center items-center ' style={{ width: '80%', margin: '0 auto', }} >
    <Grid container spacing={4} >
      {carpets.map((carpet, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} className="artisan-profile">
          <Product  
      image={carpet.image}
      hoverImage={carpet.hoverImage}
      description={carpet.description}
    />
        </Grid>
      ))}
    </Grid>
    </div>
  </section>
  </div>
  )
}

export default Shop