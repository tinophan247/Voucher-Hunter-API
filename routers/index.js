const express = require('express');
const { typeOfStoreRouter } = require('./typeOfStores.routers');
const { customerRouter } = require('./customer.routers');
const { voucherRouter } = require('./voucher.routers');
const rootRouter = express.Router();

rootRouter.use("/typeOfStores", typeOfStoreRouter );
rootRouter.use("/customers", customerRouter );
rootRouter.use("/vouchers", voucherRouter );

module.exports = {
    rootRouter
}