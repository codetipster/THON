import './App.css'
import Box from '@mui/material/Box';
import Homepage from './pages/Hompage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Artisans from './pages/Artisans';


function App() {
  

  return (
    <Router>
      <Routes>
     
      < Route path="/" element={<Homepage/>} />
      < Route path="/shop" element={<Shop/>} />
      < Route path="/artisans" element={<Artisans/>} />
   
    </Routes>
    </Router>
  )
}

export default App