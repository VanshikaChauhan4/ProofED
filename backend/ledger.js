const generateHash = require("./hash");

let ledger = [];

function addRecord({ studentId, title, issuer }) {
  const record = {
    studentId,
    title,
    issuer,
    timestamp: new Date().toISOString(),
  };

  record.hash = generateHash(record);
  ledger.push(record);
  return record;
}

function getRecordsByStudent(studentId) {
  return ledger.filter(r => r.studentId === studentId);
}

module.exports = { addRecord, getRecordsByStudent };
