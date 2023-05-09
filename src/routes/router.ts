import { Router } from "express";
import authController from "../auth/auth.controller";
import userController from "../user/user.controller";
import instituteController from "../institute/institute.controller";
import { isAuthenticated } from "../middlewares/auth.middlewar";
import documentController from "../document/document.controller";
import documentTypeController from "../document-type/document-type.controller";
const router = Router();
const settingsRoute = '/settings'
router.use("/auth", authController);
router.use("/user", isAuthenticated, userController);
router.use("/institute", isAuthenticated, instituteController);
router.use("/document", isAuthenticated, documentController);
router.use(settingsRoute + "/document-type", isAuthenticated, documentTypeController);


export default router;
