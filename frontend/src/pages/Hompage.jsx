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
              initial={{ opacity: 0, x: -30, y: 0 }} // Start slightly left
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2, duration: 1.9 }} // Increased duration for slower animation
              //style={{ fontFamily: "Xanh Mono monospace", fontSize: '50px', marginBottom: '20px' }}
              className="text-4xl md:text-5xl lg:text-6xl font-Xanh mb-5"
            >
              <div className='gradient-text'>
                Own a piece of art...
              </div>  
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60, y: 20 }} // Move further left and slightly down
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 1.9 }} // Increased duration for slower animation
              className="text-4xl md:text-5xl lg:text-6xl font-Xanh mb-5"
            >
              <div className='gradient-text'>
                Empower a woman...
              </div>  
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -90, y: 40 }} // Even further left and more down
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.2, duration: 1.9 }} // Increased duration for slower animation
              className="text-4xl md:text-5xl lg:text-6xl font-Xanh mb-5"
            >
              <div className='gradient-text'>
                Plant a tree
              </div>  
            </motion.div>
          </div>
          
          <Button
          variant="outlined"
          sx={{
            minWidth: { xs: '100%', sm: '150px' }, // Responsive width: full width on xs screens, 150px on sm screens and above
            height: '48px', // Increased height for better touchability
            fontSize: { xs: '0.875rem', sm: '1rem' }, // Responsive font size
            color: '#D7193E',
            borderColor: '#CE2344',
            ':hover': {
              backgroundColor: '#ffff',
              borderColor: '#CE2344',
            },
            // Add padding for larger touchable area and visual size
            padding: { xs: '10px 20px', sm: '12px 24px' },
          }}
          endIcon={<ShoppingBasketIcon />}
          onClick={handleClick}
          disabled={loading} // Disable button when loading
        >
          Shop Now
         </Button>
          </div>
          <div className='w-full md:w-1/2 h-screen'>
            <div className='w-full h-full '>
              <img src={lastSuja} alt="A of Suja" className='h-full w-full object-cover' />
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