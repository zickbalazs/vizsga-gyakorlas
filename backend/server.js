require('dotenv').config();
let express = require('express');
let cors = require('cors');
let app = express();

app.use(cors());
app.use(express.json());
app.use('/api', require('./controllers/dbCtrl'));

app.listen(process.env.PORT, console.log('http://localhost:'+process.env.PORT))