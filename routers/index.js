const express = require('express');
const { typeOfStoreRouter } = require('./typeOfStores.routers');
const { customerRouter } = require('./customer.routers');
const { voucherRouter } = require('./voucher.routers');
const { storeRouter } = require('./store.routers');
const { partnerRouter } = require('./partner,routers');
const { eventRouter } = require('./event.routers');
const { gameRouter } = require('./game.routers');
const { studentRouter } = require('./user.routers');
const rootRouter = express.Router();

rootRouter.use("/typeOfStores", typeOfStoreRouter );
rootRouter.use("/customers", customerRouter );
rootRouter.use("/vouchers", voucherRouter );
rootRouter.use("/stores", storeRouter );
rootRouter.use("/partners", partnerRouter );
rootRouter.use("/events", eventRouter );
rootRouter.use("/games", gameRouter );
rootRouter.use("/students", studentRouter );

module.exports = {
    rootRouter
}