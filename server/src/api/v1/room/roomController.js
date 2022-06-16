const { getRooms, getRoom } = require("./roomService.js");

exports.readAllRooms = async (req,res) => {
    //call getall du service
    try {
        const rooms = await getRooms();
        res.status(200)
            .json(rooms);
    } catch (error) {
        res.status(400)
            .json(error);
    }

}

exports.readRoom = async (req,res) => {
    try {
        const room = await getRoom(req.params.id);
        res.status(200)
            .json(room);
    } catch (error) {
        res.status(400)
            .json(error);
    }
}


// exports.addAppartement = async (req,res) => {
//     const {name, thumbnail, street, zipcode, city, number, nameRoom, imgRoom, surface,price } = req.body;
//     const data = {name, thumbnail, street, zipcode, city, number, nameRoom, imgRoom, surface,price };

//     const appartement = await addAppartement(data);
//     res.json(req.body)
// }

