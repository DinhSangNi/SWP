const router = require("express").Router();
const authControllers = require("../controllers/authControllers");

router.post("/register", authControllers.registerUser);

router.post("/login", authControllers.loginUser);

router.post("/refresh", authControllers.requestRefreshToken);

router.post("/logout",);

module.exports = router;