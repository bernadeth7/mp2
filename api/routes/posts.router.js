const express = require ("express");
const router = express.Router();

//controller
const postsController = require('../controller/posts.controller.js')

//routes getCategoryNameAndSumPerCategory
router.get("/sumcateg",postsController.getCategoryNameAndSumPerCategory);
router.get("/table",postsController.getItemListTable);
router.get("/logInDetails",postsController.getLogIn);
router.get("/table/:id",postsController.getItemListperCateg);
router.post("/check",postsController.checkIfExisting);
router.get("/itemlist",postsController.getItemTable);
router.get("/nearExpiryTable",postsController.getListOfNearExpiry);
router.get("/nearExpiryCount",postsController.getCountOfNearExpiry);
router.get("/viewItem/:id",postsController.getItemByID);
router.get("/itemTransaction/:id",postsController.getTransactionPerItem);
router.get("/transaction/:id",postsController.getTransactionDetails);
router.get("/transactionQuant/:id",postsController.getTransactionQuantity);
router.post("/newLogIn",postsController.createLogIn);
router.post("/newUser",postsController.createNewUser);
router.post("/newItem",postsController.createNewItem);
router.post("/newTransaction",postsController.createNewTransaction);
router.delete("/deleteItem/:id",postsController.deleteItemByID);
router.delete("/logout",postsController.logOut);
router.delete("/deleteTransaction/:id",postsController.deleteTransactionByID);
router.put("/editQuantity",postsController.editQuantity);

module.exports = router;