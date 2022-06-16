const db = require("../models")

exports.tokenVerif = (req,res, next) => {
    const user = db.user.findOne({where: {token: req.body.token}});
    if(!user) {
        res.status(203).json('error');
    }
    next();
}