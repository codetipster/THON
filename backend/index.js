const express = require('express');
const cors = require('cors');

// Create an instance of Express
const app = express();

// Use JSON middleware to automatically parse JSON
app.use(express.json());

// Use CORS middleware to enable CORS with various options
app.use(cors());

// Example of a simple GET route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// More routes can be added here

// Start the server on port 8000
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
