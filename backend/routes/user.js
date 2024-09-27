const router = require("express").Router();
const userControllers = require("../controllers/userControllers");
const middlewareControllers = require("../controllers/middlewareControllers");

// get all users
router.get("/", middlewareControllers.verifyToken, userControllers.getAllUsers);

// delete a users
router.delete("/:id", middlewareControllers.verifyTokenAndAdminAuth, userControllers.deleteUser);

module.exports = router;