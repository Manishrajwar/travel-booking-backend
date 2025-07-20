const express = require('express');
const cors = require('cors');

const tripsRoutes = require('./routes/trips');
const hotelsRoutes = require('./routes/hotels');
const citiesRoutes = require('./routes/cities');

const app = express();
app.use(cors({
     origin:"*" 
}));

// Routes
app.use("/api/cities" , citiesRoutes);
app.use('/api/trips', tripsRoutes);
app.use('/api/hotels', hotelsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
