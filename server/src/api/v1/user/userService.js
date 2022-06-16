const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { reset } = require("nodemon");


//logique
exports.addUser = async (email, name, password, res) => {

    const userExist = await db.user.findOne({where: {email: email}});
    if(!userExist) {
        const hashmdp = await bcrypt.hash(password, 10);

        try {

            const user = await db.user.create({
                email: email,
                name: name,
                password: hashmdp
            });

            const token = jwt.sign(
                { user_id: user.id,name },
                process.env.TOKEN
            );
            user.token = token;
            await user.save();

            res.status(201).json(user.token);
        } catch(e) {
            console.log(e);
        }
    } else {
        res.status(209).json('User existant');
    }
}


exports.getUser = async (email, password , res ) => {
    const user = await db.user.findOne({where: {email: email}});
    if(user) {
        try {
            const hashmdp = await bcrypt.compare(password, user.password);
            const name = user.name;
            const token = jwt.sign(
                { user_id: user.id, name },
                process.env.TOKEN
            );
            // save user token
            user.token = token;
            await user.save();
          // user
          res.status(200).json(user.token);
        } catch(e) {
            res.json('Incorrect');
        }
    } else {
        res.status(209).json('Aucun User');
    }
}

exports.getAdmin = async (email, password , res ) => {
    const user = await db.user.findOne({where: {email: email}});
    if(user && user.isAdmin) {
        try {
            const hashmdp = await bcrypt.compare(password, user.password);
            const name = user.name;
            const token = jwt.sign(
                { user_id: user.id, name },
                process.env.TOKEN
            );
            // save user token
            user.token = token;
            await user.save();
          // user
          res.status(200).json(user.token);
        } catch(e) {
            res.json('Incorrect');
        }
    } else {
        res.status(209).json('Aucun User et pas admin');
    }
}