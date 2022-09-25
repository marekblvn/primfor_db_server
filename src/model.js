const mongoose  = require("mongoose");

const schema = new mongoose.Schema({
    metadata: {type: Object, required: true},
    info: {type: Object, required: true}
});

const MatchModel = mongoose.model("Match", schema);

module.exports = MatchModel;