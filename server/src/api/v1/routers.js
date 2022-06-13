
// Importation des routeurs
const appartementRouter = require('./appartement/appartementRouter');

// declaration du routeur pricinpale avec en param express
const routers = (app) => {
    // utilisation du routeur appartement
    app.use('/api/v1/', appartementRouter);
}

// export routeur principale
module.exports = routers;