import React from 'react';
import Header from '../components/Header.jsx';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import lastSuja from "../assets/images/lastSuja.jpg"
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import ScrollReveal from 'scrollreveal';
import { motion } from 'framer-motion';
import artisanBImage from "../assets/images/recropped.jpg";

export const Shop = () => {
  const carpets = [
    {
      name: "Artisan A",
      description: "Expert in traditional pottery.",
      image: artisanBImage, // A sample image of pottery
    },
    {
      name: "Artisan B",
      description: "Renowned for intricate textile designs.",
      image: artisanBImage, // A sample image of textiles
    },
    {
      name: "Artisan B",
      description: "Renowned for intricate textile designs.",
      image: artisanBImage, // Placeholder, replace with actual image paths
    },
    
  ];
  return (
    <div> <section style={{ width: '100%', margin: '0 auto'}} >
    <Typography variant="h4" gutterBottom className='p-7'>
      Atelier
    </Typography>
    <Typography variant="h5" gutterBottom className='p-3'> 
       For her, For the Earth!
    </Typography>
   <div className='flex justify-center items-center ' style={{ width: '80%', margin: '0 auto', }} >
    <Grid container spacing={4} >
      {carpets.map((artisan, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} className="artisan-profile">
          <Card style={{ width: '80%'}}> 
            <CardMedia
              component="img"
              style={{ height: '500px', objectFit: 'cover', width: '100%'}} 
              width={70}
              image={artisan.image}
              alt={artisan.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {artisan.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {artisan.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </div>
  </section></div>
  )
}

export default Shop