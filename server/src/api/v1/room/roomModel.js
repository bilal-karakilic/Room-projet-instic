// model de la table

module.exports = (sequelize, Sequelize) => {

    const room = sequelize.define("room", {

        name: {

            type: Sequelize.STRING,
            allowNull: false
        },

        number: {
            type: Sequelize.INTEGER,
            allowNull: false
        },

        thumbnail: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        surface: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        price: {
            type: Sequelize.FLOAT,
            allowNull: false
        },

        appart_id: {

            type: Sequelize.INTEGER,
            allowNull: false
        },
        reserved: {

            type: Sequelize.INTEGER,
            defaultValue: false,
        },

    });

    return room;

};