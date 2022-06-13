// model de la table


module.exports = (sequelize, Sequelize) => {

    const appartement = sequelize.define("appartement", {
        
        title: {
        
            type: Sequelize.STRING,
            allowNull: false
        
        },
    
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
    
        rooms: {
        
            type: Sequelize.JSON,
            defaultValue: null
        }
    
    });
    
    return appartement;
    
};