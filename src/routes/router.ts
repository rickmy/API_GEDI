import { Router } from "express";
import authController from "../auth/auth.controller";
import userController from "../user/user.controller";
import instituteController from "../institute/institute.controller";
import { isAuthenticated } from "../middlewares/auth.middlewar";
import documentController from "../document/document.controller";
const router = Router();

router.use("/auth", authController);
router.use("/user",isAuthenticated, userController);
router.use("/institute",isAuthenticated, instituteController);
router.use("/document",isAuthenticated, documentController);

export default router;
