// model de la table


module.exports = (sequelize, Sequelize) => {

    const reservation = sequelize.define("reservation", {
    
        title: {
        
            type: Sequelize.STRING,
            allowNull: false
        
        },
    
        number: {
            type: Sequelize.INTEGER,
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
    
    });
    
    return reservation;
    
};