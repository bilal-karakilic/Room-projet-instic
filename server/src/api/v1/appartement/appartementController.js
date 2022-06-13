const { getAllAppartements, getAppartement } = require("./appartementService");

exports.readAllAppartements = async (req,res) => {
    //call getall du service
    try {
        const appartements = await getAllAppartements();
        res.status(200)
            .json(appartements);
    } catch (error) {
        res.status(400)
            .json(error);
    }

}

exports.readAppartement = async (req,res) => {
    try {
        const appartement = await getAppartement(req.params.id);
        res.status(200)
            .json(appartement);
    } catch (error) {
        res.status(400)
            .json(error);
    }
}

