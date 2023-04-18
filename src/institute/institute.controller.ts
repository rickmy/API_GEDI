import { Router } from "express";
import instituteService from "./institute.service";

const instituteController = Router();

instituteController.get("/", async (_req, res) => {
  try {
    return res.send(await instituteService.getInstitutes());
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

instituteController.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    return res.send(await instituteService.getInstituteById(Number(id)));
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

instituteController.post("/", async (req, res) => {
  try {
    const { name, code } = req.body;
    return res.send(await instituteService.createInstitute(name, code));
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

instituteController.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;
    return res.send(await instituteService.updateInstitute(Number(id), name, code));
  } catch (error) {
    res.status(500).json({ message: error });
  }
});


export default instituteController;