
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Basic middleware
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

// Health check
app.get('/health', (_req, res) => {
	res.json({ status: 'ok', service: 'careerpilot-backend' });
});

// Routes
const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const cvRoutes = require('./src/routes/cvRoutes');
const careerRoutes = require('./src/routes/careerRoutes');
const chatRoutes = require('./src/routes/chatRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/cv', cvRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/chat', chatRoutes);

module.exports = app;
