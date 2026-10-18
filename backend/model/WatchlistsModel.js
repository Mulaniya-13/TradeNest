const { model } = require("mongoose");

const { WatchlistsSchemas } = require("../schemas/WatchlistsSchemas");

const WatchlistsModel = new model("watchlist", WatchlistsSchemas);

module.exports = {WatchlistsModel};