require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const { loggerMiddleware } = require('./utils/logger');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Backend API Server', version: '1.0.0' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;