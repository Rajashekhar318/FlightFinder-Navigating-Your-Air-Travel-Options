const express = require('express');
const cors = require('cors');
const flightRoutes = require('./routes/flights');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/flights', flightRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
