const {
    addMatch,
    getMatch,
} = require("./dao")
const Error = require("./error/error");
const axios = require("axios").default;

const getMatchDataAbl = async (req, res) => {
    let dtoOut;
    try {
        dtoOut = await getMatch([]);
    } catch (e) {
        throw new Error.Get.GetDaoFailed(e);
    }
    res.send(dtoOut);
};

const storeMatchDataAbl = async (req, res) => {
    //const matchId = 3219987255;
    const matchId = req.query.matchid;
    const fetchUrl = `https://europe.api.riotgames.com/lol/match/v5/matches/${process.env.LOL_REGION}_${matchId}?api_key=${process.env.RIOT_API_KEY}`;
    let matchData;
    try {
        matchData = (await axios.get(fetchUrl)).data;
    } catch (e) {
        throw new Error.Store.RiotApiFailed(e);
    }
    let dtoOut;
    try {
        if (matchData) {
            dtoOut = await addMatch(matchData);
        }
    } catch (e) {
        throw new Error.Store.StoreDaoFailed(e);
    }
    res.send(dtoOut);
};

module.exports = {
    getMatchDataAbl,
    storeMatchDataAbl,
};