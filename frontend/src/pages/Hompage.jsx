import Header from '../components/Header.jsx'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import lastSuja from "../assets/images/lastSuja.jpg"

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: '#FFFFFF', height: '100vh'}}>
      <Header />
      <section className='p-4'>
        <div className='flex'>
          <div className='w-[50%] flex flex-col justify-center items-center h-[100vh]'>
          <Button variant="outlined" endIcon={<ShoppingBasketIcon />}>
        Shop Now
      </Button>
          </div>
          <div className='w-[50%] bg-red-500 h-screen'>
            <div className='w-[100%] h-screen bg-red-400 '>
            <img src= {lastSuja} alt="A Picture of Suja" className='h-screen w-[100%]'/>
          </div>
          </div>
        </div>
      </section>
    </Box>
  )
}

export default Homepage