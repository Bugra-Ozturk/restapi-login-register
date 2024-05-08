const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/database.js');
const Auth = require('./routes/auth.js')
dotenv.config();

const app = express();
app.use(cors());

app.use(express.json({limit : '30mb' , extended : true}))
app.use(express.urlencoded({limit : '30mb' , extended : true}))

const PORT = process.env.PORT || 5000;


app.use('/', Auth)


db()


app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
})