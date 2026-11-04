const mongoose = require("mongoose");

const OrdersSchemas = new mongoose.Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

module.exports = mongoose.model("order", OrdersSchemas);