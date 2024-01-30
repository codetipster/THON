import Header from '../components/Header.jsx'
import Box from '@mui/material/Box';

const Homepage = () => {
  return (
    <Box sx={{backgroundColor: '#FFFFFF', height: '100vh'}}>
      <Header />
      <section>
        <h1>this is our hero section</h1>
        <p>Welcome to our new shopping experience.</p>
      </section>
    </Box>
  )
}

export default Homepage