import express from "express";
import { issueCertificate } from "../controllers/cert.controller.js";

const router = express.Router();

router.post("/issue", issueCertificate);

export default router;
