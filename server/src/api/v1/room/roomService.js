const db = require("../models");

exports.getAllRooms = async () => {
    const rooms = await db.sequelize.query('SELECT * FROM rooms');
    return rooms;
}


exports.getRoom = async (id) => {
    const room = await db.sequelize.query(`SELECT * FROM rooms WHERE id = ${id}`);
    if(room) {
        return room;
    } else {
        return;
    }
}