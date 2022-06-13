const db = require("../models");

exports.getAllAppartements = async () => {
    const appartements = await db.sequelize.query('SELECT * FROM appartements');
    return appartements;
}


exports.getAppartement = async (id) => {
    const appartement = await db.sequelize.query(`SELECT * FROM appartements WHERE id = ${id}`);
    if(appartement) {
        return appartement;
    } else {
        return;
    }
}

