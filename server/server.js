const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Подключение к MongoDB
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});
