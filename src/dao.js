const MatchModel = require("./model");
const addMatch = (match) => MatchModel.create(match);
const getMatch = (championNames) => championNames.length ? MatchModel.find({
    'info.participants': {
        '$all':
            championNames.map((name) => ({$elemMatch: {championName: name}}))
    }
}) : MatchModel.find();
module.exports = {
    addMatch,
    getMatch,
}