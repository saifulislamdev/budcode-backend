import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// import routers

// intiialize app
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// connect to DB

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to BudCode!' });
});

// define router paths

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
