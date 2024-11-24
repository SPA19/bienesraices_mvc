import express from "express";
import {
  formLogin,
  formRegister,
  formRememberPassword,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/login", formLogin);

router.get("/register", formRegister);

router.get("/remember-password", formRememberPassword);

export default router;