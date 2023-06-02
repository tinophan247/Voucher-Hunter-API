const express = require('express');
const { typeOfStoreRouter } = require('./typeOfStores.routers');
const { customerRouter } = require('./customer.routers');
const { voucherRouter } = require('./voucher.routers');
const { storeRouter } = require('./store.routers');
const rootRouter = express.Router();

rootRouter.use("/typeOfStores", typeOfStoreRouter );
rootRouter.use("/customers", customerRouter );
rootRouter.use("/vouchers", voucherRouter );
rootRouter.use("/stores", storeRouter );

module.exports = {
    rootRouter
}