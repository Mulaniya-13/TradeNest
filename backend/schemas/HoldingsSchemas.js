const { schema } = require("mongoose");

const HoldingsSchema = new schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = {HoldingsSchema};