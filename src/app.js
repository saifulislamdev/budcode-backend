const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// intiialize app
dotenv.config();
const app = express();

// this lets us parse 'application/json' content in http requests
app.use(express.json()); 

app.use(cors());

// add http request logging to help us debug and audit app use
// const logFormat = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
// app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./routes'));

// connect to DB

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to BudCode!' });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
