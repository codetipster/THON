import './App.css'
import Box from '@mui/material/Box';
import Homepage from './pages/Hompage';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Shop from './pages/Shop';


function App() {
  

  return (
    <Router>
      <Routes>
     
      < Route path="/" element={<Homepage/>} />
      < Route path="/shop" element={<Shop/>} />
   
    </Routes>
    </Router>
  )
}

export default App