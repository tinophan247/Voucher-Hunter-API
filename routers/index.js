const express = require('express');
const { typeOfStoreRouter } = require('./typeOfStores.routers');
const { customerRouter } = require('./customer.routers');
const { voucherRouter } = require('./voucher.routers');
const { storeRouter } = require('./store.routers');
const { partnerRouter } = require('./partner,routers');
const { eventRouter } = require('./event.routers');
const rootRouter = express.Router();

rootRouter.use("/typeOfStores", typeOfStoreRouter );
rootRouter.use("/customers", customerRouter );
rootRouter.use("/vouchers", voucherRouter );
rootRouter.use("/stores", storeRouter );
rootRouter.use("/partners", partnerRouter );
rootRouter.use("/events", eventRouter );


module.exports = {
    rootRouter
}