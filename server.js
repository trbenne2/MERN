const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect db
connectDB();

// init middleware to parse body
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));

// defualt 5000 || look for env variable this is for heroku to get number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ' + PORT));
