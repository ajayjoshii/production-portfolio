const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')

const contactRoutes = require('./routes/contactRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

dotenv.config();
const app = express();
const _dirname = path.resolve();

// Middleware
app.use(express.json());
const corsOptions = {
  origin: "https://production-portfolio-web.onrender.com",
  credentials: true
}
app.use(cors(corsOptions));


// Routes
app.use('/api/contact', contactRoutes);
app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"))
});

// Error Handling
app.use(notFound);
app.use(errorHandler);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
