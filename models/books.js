module.exports = function(sequelize, Sequelize) {
    var Books = sequelize.define('Books', {
        name: Sequelize.STRING
    })
    return Books;
};
