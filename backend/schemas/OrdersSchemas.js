const { schema } = require("mongoose");

const OrdersSchemas = new schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = {OrdersSchemas};