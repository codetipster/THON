import Header from '../components/Header.jsx'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import lastSuja from "../assets/images/lastSuja.jpg"
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect} from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import ScrollReveal from 'scrollreveal';
import { backInOut, motion } from 'framer-motion';
import artisanBImage from "../assets/images/recropped.jpg";
import logo from '../assets/images/logo.jpg'; 


const Homepage = () => {

  let navigate = useNavigate()
  const [loading, setLoading] = useState(false);


  const handleClick = (e) => {
    e.preventDefault()
    setLoading(true); 

    setTimeout(() => {
      navigate('/shop');
    }, 8000);

  }

  useEffect(() => {
    ScrollReveal().reveal('.artisan-profile', { delay: 500, distance: '50px', easing: 'ease-in-out', origin: 'bottom' });
  }, []);

  const artisans = [
    {
      name: "Artisan A",
      description: "Expert in traditional pottery.",
      image: artisanBImage,
    },
    {
      name: "Artisan B",
      description: "Renowned for intricate textile designs.",
      image: artisanBImage, 
    },
    {
      name: "Artisan B",
      description: "Renowned for intricate textile designs.",
      image: artisanBImage, 
    },
    
  ];


  return (
    <Box sx={{backgroundColor: '#FFFFFF', height: '100vh'}}>
      <Header />
      
      {loading && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <CircularProgress />
        </Box>
      )}
      <section className='p-1'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:h-[90vh]'>
          <div className='mt-20 sm:mt-0'>
            <motion.div
              initial={{ opacity: 0, x: -30, y: 0 }} 
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 1.9 }}
              className="text-4xl md:text-5xl lg:text-6xl primary-font mb-5"
            >
              <div className='gradient-text'>
                Own a piece of art...
              </div>  
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2, duration: 1.9 }}
              className="text-4xl md:text-5xl lg:text-6xl primary-font mb-5"
            >
              <div className='gradient-text'>
                Empower a woman...
              </div>  
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -90, y: 40 }} 
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 3.3, duration: 1.9 }}
              className="text-4xl md:text-5xl lg:text-6xl primary-font mb-5"
            >
              <div className='gradient-text'>
                Plant a tree
              </div>  
            </motion.div>
          </div>
          
          <a
    href="#"
    onClick={handleClick}
    className={`shop-now ${loading ? 'loading' : ''}`}
    style={{
      textDecoration: 'none',
      display: 'flex', 
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: "20px",
      color: '#134929',
      fontFamily: "Xanh Mono monospace",
      marginTop: '20px',
    }}
  >
    Shop Now
    <img 
      src={logo} 
      alt="Logo" 
      style={{ height: '30px', marginLeft: '10px' }} 
    />
</a>
            

          </div>
          <div className='w-full md:w-1/2 h-screen'>
            <div className='w-full h-full '>
              <img src={lastSuja} alt="A picture of Suja" className='h-full w-full object-cover' />
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: '100%', margin: '0 auto'}} >
        <Typography variant="h4" gutterBottom style={{fontFamily: "Xanh Mono monospace"}} className='p-5 primary-color'>
        Our Artisans
        </Typography>
       
          <Typography variant="h5" gutterBottom style={{fontFamily: "Xanh Mono monospace"}} className='p-5 primary-color'> 
           For her, For the Earth.
        </Typography> 
       
       <div className='flex justify-center items-center ' style={{ width: '80%', margin: '0 auto' }} >
        <Grid container spacing={4} >
          {artisans.map((artisan, index) => (
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
                  <Typography gutterBottom variant="h5" component="div" style={{fontFamily: "Xanh Mono monospace"}} className='primary-color' >
                    {artisan.name}
                  </Typography>
                  <Typography variant="body2" style={{fontFamily: "Xanh Mono monospace"}} className='primary-color' >
                    {artisan.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        </div>
      </section>
    </Box>
  );
}

export default Homepage