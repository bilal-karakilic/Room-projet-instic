
// Importation des routeurs
const appartementRouter = require('./appartement/appartementRouter');
const userRooter = require('./user/userRouter');
const roomRooter = require('./room/roomRouter');

// declaration du routeur pricinpale avec en param express
const routers = (app) => {
    // utilisation du routeur appartement
    app.use('/api/v1/', appartementRouter);
    app.use('/api/v1/', roomRooter);
    app.use('/api/v1/', userRooter);
}

// export routeur principale
module.exports = routers;