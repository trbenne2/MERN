const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Running'));

// defualt 5000 || look for env variable this is for heroku to get number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server started on port ${PORT}'));
