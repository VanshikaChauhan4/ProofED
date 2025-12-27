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
const profileURL = `${window.location.origin}/profile.html?wallet=${data.wallet}`;

new QRCode(document.getElementById("studentQR"), profileURL);

if (totalPoints > 50) badges.push("🏅 Trusted Learner");
if (studentCerts.length >= 5) badges.push("🚀 Active Contributor");
document.getElementById("certificatePreview").classList.remove("hidden");

document.getElementById("certStudent").innerText = data.student;
document.getElementById("certCourse").innerText = data.course;
document.getElementById("certInstitute").innerText = data.inst;
document.getElementById("certID").innerText = certID;
document.getElementById("certDate").innerText =
  "Issued on " + new Date().toDateString();

document.getElementById("certQR").innerHTML = "";
new QRCode(document.getElementById("certQR"), certID);
