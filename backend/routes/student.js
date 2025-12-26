const express = require("express");
const router = express.Router();
const { getRecordsByStudent } = require("../ledger");

// GET: Fetch student profile
router.get("/:id", (req, res) => {
  const studentId = req.params.id;
  const records = getRecordsByStudent(studentId);

  res.json({
    studentId,
    totalContributions: records.length,
    records,
  });
});

module.exports = router;
