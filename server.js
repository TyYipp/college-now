const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // For storing secrets in .env file

const app = express();
const PORT = 3000;

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB Connection Error:", err));

app.get('/', (req, res) => {
    res.send('MongoDB Connection Successful!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});