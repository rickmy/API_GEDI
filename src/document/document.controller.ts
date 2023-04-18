import { Router } from "express";
import multer from "multer";
import multerStorage from "../utils/multer";
import DocumentService from "./document.service";
const documentController = Router();
const upload = multer({storage:multerStorage});
const documentService = new DocumentService();

documentController.get("/", async (_req, res) => {
  try {
    return res.send(await documentService.getDocuments());
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

documentController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.send(await documentService.getDocumentById(Number(id)));
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

documentController.post("/",upload.single('imagen'), async (req, res) => {
  try {
    const { code, userId } = req.body;
    const file = req['file'];
    return res.send(await documentService.uploadFile( code,file, userId));
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default documentController;
