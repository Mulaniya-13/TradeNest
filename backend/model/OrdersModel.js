const { model } = require("mongoose");

const { OrdersSchemas } = require("../schemas/OrdersSchemas");

const OrdersModel = new model("order", OrdersSchemas);

module.exports = {OrdersModel};