const ApplicationError = require("./ApplicationError");
const ERROR_PREFIX = "match_data/";

const Store = {
    CODE: `${ERROR_PREFIX}store/`,

    RiotApiFailed: class extends ApplicationError {
        constructor(error) {
            const code = `${Store.CODE}riotApiFailed`;
            const message = "Riot API failed";
            const status = 500;
            super(code, message, status);
            this.error = error;
        }
    },
    StoreDaoFailed: class extends ApplicationError {
        constructor(error) {
            const code = `${Store.CODE}storeDaoFailed`;
            const message = "Store DAO Failed";
            const status = 505;
            super(code, message, status);
            this.error = error;
        }
    },
};

const Get = {
    CODE: `${ERROR_PREFIX}get/`,
    GetDaoFailed: class extends ApplicationError {
        constructor(error) {
            const code = `${Get.CODE}getDaoFailed`;
            const message = "Get DAO Failed";
            const status = 506;
            super(code, message, status);
            this.error = error;
        }
    }
}

module.exports = {
    Store,
    Get,
};