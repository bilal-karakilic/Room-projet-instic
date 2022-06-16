const faker = require('faker');

module.exports = {
    up: (queryInterface, Sequelize) => {
        var newData = [];

        for (let i = 0; i < 10; i++) {
            const seedData = {
                title: 'title',
                name: faker.name.firstName(),
                thumbnail:'https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1',
                street: '2 rue jean',
                zipcode: faker.address.countryCode(),
                city: 'lyon',
            };
            newData.push(seedData);
        }

        return queryInterface.bulkInsert('Appartements', newData);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Appartements', null, {});
    }
};