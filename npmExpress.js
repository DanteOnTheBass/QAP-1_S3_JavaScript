// Importing the Express.js framework
const express = require('express');

// Creating an instance of the Express application
const app = express();

// Setting the port for the server to listen on
const port = 4000;

// Defining a route for the root URL ('/')
app.get('/', (req, res) => {
  // Inside the route handler for the root URL

  // Your logic here (optional, replace with your own logic)

  // Sending the response 'Hello, Peter!' to the client
  res.send('Hello, Peter!');
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  // Logging a message when the server is successfully started
  console.log(`Server is running at http://localhost:${port}`);
});


