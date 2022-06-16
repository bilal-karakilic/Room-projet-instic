const db = require("../models");

exports.getAllAppartements = async () => {
    const appartements = await db.appartement.findAll();
    return appartements;
}


exports.getAppartement = async (id) => {
    const appartement = await db.appartement.findOne({where: {id: id }});
    if(!appartement) {
        return false;
    }
    return appartement;
}

exports.addAppartement = async (data) => {
    const {name, thumbnail, street, zipcode, city, number, nameRoom, imgRoom, surface,price } = data;
    try {
        const appart = await db.appartement.create({
            title:name,
            name: name,
            thumbnail: thumbnail,
            street:street,
            zipcode: zipcode,
            city: city,
        });

        const room = await db.room.create({
            number: number,
            name:nameRoom,
            thumbnail: imgRoom,
            surface: surface,
            price: price,
            appart_id: appart.id,
        })

        appart.rooms = [{ id: room.id }];

        appart.save();

        return {room, appart};
    } catch(e) {
        console.log(e);
    }
}

