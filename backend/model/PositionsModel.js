const { model } = require("mongoose");

const { PositionsSchemas } = require("../schemas/PositionsSchemas");

const PositionsModel = new model("position", PositionsSchemas);

module.exports = {PositionsModel};