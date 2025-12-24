import { addRecord, getRecords } from "../blockchain/storage.js";

// Simple hash function (for prototype)
function generateHash(text) {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = hash + text.charCodeAt(i);
  }
  return "HASH_" + hash;
}

window.addAchievement = function () {
  const studentId = document.getElementById("studentId").value;
  const achievement = document.getElementById("achievementText").value;

  if (!studentId || !achievement) {
    alert("Please fill all fields");
    return;
  }

  const hash = generateHash(achievement);

  addRecord(studentId, hash, "College Authority");

  document.getElementById("output").innerText =
    "Achievement added and stored securely.";
};

window.verifyAchievement = function () {
  const studentId = document.getElementById("verifyStudentId").value;
  const records = getRecords(studentId);

  if (records.length === 0) {
    document.getElementById("output").innerText =
      "No verified achievements found.";
  } else {
    document.getElementById("output").innerText =
      "Verified achievements found for student " + studentId;
  }
};
// script.js

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toDateString();
}

// Future gamification support
function calculatePoints(records) {
  return records.length * 10;
}

