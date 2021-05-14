const express = require('express');
const { addItemToCart, removeCartItems } = require('../controller/cart');
const { requireSignin, userMiddleware } = require('../common-middleware');
const router = express.Router();


router.post('/user/cart/addtocart', requireSignin, userMiddleware, addItemToCart);
//router.post("/user/getcartitems", requireSignin, userMiddleware, getCartItems);

router.post(
    "/user/cart/removeItem",
    requireSignin,
    userMiddleware,
    removeCartItems
  );

module.exports = router;