const express = require("express");
const {
  registerUser,
  loginUser,
  verifyEmail,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verify-email", verifyEmail)

module.exports = router;
