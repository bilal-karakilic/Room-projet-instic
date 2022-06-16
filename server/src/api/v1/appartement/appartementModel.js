// model de la table

const { room } = require("../models");


module.exports = (sequelize, Sequelize) => {

    const appartement = sequelize.define("appartement", {

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        thumbnail: {
            type: Sequelize.TEXT,
            allowNull: false
        },


        street: {
            type: Sequelize.STRING,
            allowNull: false
        },

        zipcode: {
            type: Sequelize.STRING,
            allowNull: false
        },

        city: {

            type: Sequelize.STRING,
            allowNull: false
        },

    });

    return appartement;

};