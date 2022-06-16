const db = require("../models");

exports.getRooms = async () => {
    const rooms = await db.room.findAll();
    return rooms;
}


exports.getRoom = async (id) => {
    console.log(id);
    const room = await db.room.findOne({where: {id: id }});
    if(!room) {
        return false;
    }
    return room;
}
