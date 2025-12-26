const express = require("express");
const router = express.Router();
const { getRecordsByStudent } = require("../ledger");

// GET: Public verification
router.get("/:id", (req, res) => {
  const studentId = req.params.id;
  const records = getRecordsByStudent(studentId);

  if (records.length === 0) {
    return res.json({
      verified: false,
      message: "No records found",
    });
  }

  res.json({
    verified: true,
    records,
  });
});

module.exports = router;
