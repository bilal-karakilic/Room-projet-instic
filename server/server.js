const express = require('express');
const morgan = require('morgan')
const routers = require('./src/api/v1/routers');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./src/api/v1/models");

const port = process.env.PORT || 3080;




app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());


//call all routers
routers(app);

db.sequelize.sync();

app.listen(port, (req, re) => {
    console.log('port listen')
})
