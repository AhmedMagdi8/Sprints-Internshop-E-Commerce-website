const Sequelize = require("sequelize");

const sequelize = require("../database");

const CartItem = sequelize.define('cartItem', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: Sequelize.INTEGER
});

module.exports = CartItem;