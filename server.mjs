// Initialize the Project
    // npm init -y 
    // npm install express
// Setup Git

// Imports
import express from 'express';

// Create the Express Server /  an instance of express

const app = express();
let PORT = 3000;



// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


// Create and Use Middleware

const logRequest = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    next();
  };
  
  const checkAuth = (req, res, next) => {
    if (req.query.apiKey === '12345') {
      next();
    } else {
      res.status(401).send('Unauthorized');
    }
  };
  
  app.use(logRequest);

  
  // Create RESTful API Endpoints
  