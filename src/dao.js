const MatchModel = require("./model");
const addMatch = (match) => MatchModel.create(match);
const getMatch = (championNames) => championNames.length ? MatchModel.find({
    'info.participants': {
        '$all':
            championNames.map((name) => ({$elemMatch: {championName: name}}))
    }
}) : MatchModel.find();
const loadMatch = (id) => MatchModel.findById(id);
module.exports = {
    addMatch,
    getMatch,
    loadMatch,
}