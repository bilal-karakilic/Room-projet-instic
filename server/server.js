const express = require('express');
const morgan = require('morgan')
const routers = require('./src/api/v1/routers');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./src/api/v1/models"); 

const port = process.env.PORT || 3080;



const corsOptions = {
    origin: "http://localhost:". port
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(morgan('dev'));

routers(app);

db.sequelize.sync(); 

app.listen(port, (req, re) => {
    console.log('port listen')
})
