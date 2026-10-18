const { schema } = require("mongoose");

const WatchlistsSchemas = new schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
});

module.exports = {WatchlistsSchemas};