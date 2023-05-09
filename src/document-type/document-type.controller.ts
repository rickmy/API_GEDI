import { Router } from "express";
import { DocumentTypeService } from "./document-type.service";

const documentTypeController = Router();
const documentTypeService = new DocumentTypeService();

documentTypeController.get("/", async (_req, res) => {
  try {
    return res.send(await documentTypeService.getDocumentTypes());
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

documentTypeController.get("/subTypeDocument", async (_req, res) => {
  try {
    return res.send(await documentTypeService.getSubTypeDocument());
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

documentTypeController.get("/subTypeDocument/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.send(
      await documentTypeService.getSubTypeDocumentById(Number(id))
    );
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

export default documentTypeController;