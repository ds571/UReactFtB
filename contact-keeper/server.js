const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// initialize express
const app = express();

// initialize cors
var cors = require('cors');

var corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST, DELETE, OPTIONS',
    preflightContinue: true,
    optionsSuccessStatus: 204,
    exposedHeaders: 'x-auth-token'
  };
  app.use(cors(corsOptions));

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false})); // no we can accept data

//app.get('/', (req, res) => res.json({ msg: 'Welcome to the ContactKeeper API...'}));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets (React) in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));