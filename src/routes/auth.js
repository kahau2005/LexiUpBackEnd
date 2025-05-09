const authController = require("../controllers/authControllers");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post('/login', authController.loginUser);
router.post('/refresh', authController.requestRefreshToken);
router.post('/logout', authController.userLogout);

module.exports = router;