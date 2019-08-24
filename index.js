const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const config = require('./config');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        info: 'Node.js Movie Store web API'
    })
});

const moviesDb = require('./movies');
app.get('/api/movies', moviesDb.getMovies);

app.listen(config.port, () => 
    console.log(`Example app listening on port ${config.port}!`)
);