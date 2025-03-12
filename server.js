// Import the express framework
const express = require('express');

// Define app & port number
const app = express();
const port = 3000;

// Serve static HTML file from the current directory
app.use(express.static(__dirname))

//Start the server
app.listen(port, () =>{
    console.log(`Example app listening at https://localhost:${port}`);
});