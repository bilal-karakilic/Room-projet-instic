const { addUser, userExist, getUser, getAdmin } = require("./userService")


//call service

exports.addNewUser = async (req,res) => {
    addUser(req.body.email,req.body.name,req.body.password, res);
}

exports.getUser = async (req,res) => {
    getUser(req.body.email,req.body.password, res);
}

exports.getAdmin = async (req,res) => {
    getAdmin(req.body.email,req.body.password, res);
}

