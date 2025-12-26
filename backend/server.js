const express = require("express");
const cors = require("cors");

const { addRecord, getRecordsByStudent } = require("./ledger");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// ✅ ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ ADMIN ISSUE
app.post("/admin/issue", (req, res) => {
  const { studentId, title, issuer } = req.body;

  if (!studentId || !title || !issuer) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const record = addRecord({ studentId, title, issuer });
  res.json({ success: true, record });
});

// ✅ STUDENT VIEW
app.get("/student/:id", (req, res) => {
  res.json(getRecordsByStudent(req.params.id));
});

// ✅ VERIFY
app.get("/verify/:id", (req, res) => {
  const records = getRecordsByStudent(req.params.id);
  res.json({
    verified: records.length > 0,
    records
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
