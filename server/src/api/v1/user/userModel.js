// model de la table


module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
    
        title: {
        
            type: Sequelize.STRING,
            allowNull: false
        
        },
    
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

        roles: {
        
            type: Sequelize.STRING,
            defaultValue: 'user'
        },
    
        reservation: {
        
            type: Sequelize.INTEGER,
            defaultValue: null
        },

        token: {
        
            type: Sequelize.TEXT,
            allowNull: false
        }
    
    });
    
    return user;
    
};