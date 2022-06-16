// model de la table


module.exports = User = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        password: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        isAdmin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },

        reservation: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },

        token: {
            type: Sequelize.TEXT,
            defaultValue: 'null'
        }

    });

    return user;

};