const express = require("express");
const router = express.Router();
const { addRecord } = require("../ledger");

// POST: Issue new academic contribution
router.post("/issue", (req, res) => {
  const { studentId, title, issuer } = req.body;

  if (!studentId || !title || !issuer) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const record = addRecord({ studentId, title, issuer });
  res.json({ success: true, record });
});

module.exports = router;
