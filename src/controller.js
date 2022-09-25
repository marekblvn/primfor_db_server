const express = require("express");
const router = express.Router();

const {
    getMatchDataAbl,
    storeMatchDataAbl
} = require("./abl");

router.post("/store", storeMatchDataAbl);
router.get("/get", getMatchDataAbl);

module.exports = router;