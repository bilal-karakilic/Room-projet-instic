
//call config fichier 
const dbConfig = require("../../config/db.config");
//include sequelize
const Sequelize = require("sequelize");


//init sequelize 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        timestamps: true
    },
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

//add sequelize db
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//get model and add db
db.appartement = require("./appartement/appartementModel.js")(sequelize, Sequelize);
db.room = require("./room/roomModel.js")(sequelize, Sequelize);
db.user = require("./user/userModel.js")(sequelize, Sequelize);
db.reservation = require("./reservation/reservationModel.js")(sequelize, Sequelize);

module.exports = db;