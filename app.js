var express = require('express');
var app = express()

var bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())

let dbConf = require('./config/mongoose');
 let apiRoutes = require('./routes/apiRoutes');
require('dotenv').config()
dbConf.connect();


app.use(express.static('view'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//To Enable Custom Headers to the request
const corsOptions = {
    exposedHeaders: 'x-auth-header',
};

app.use('/room', apiRoutes);


app.use(cors(corsOptions));

app.get('/',(req,res)=>res.send("Hello"))


app.listen(8080, () => console.log("running on post 8080"));