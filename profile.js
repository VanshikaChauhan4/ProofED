const params = new URLSearchParams(window.location.search);
const wallet = params.get("wallet");

const certs = JSON.parse(localStorage.getItem("certificates")) || [];

const studentCerts = certs.filter(c => c.studentWallet === wallet);

if (!studentCerts.length) {
  document.body.innerHTML = "<h2>Profile not found ❌</h2>";
}

const totalPoints = studentCerts.reduce((s, c) => s + c.points, 0);

document.getElementById("studentName").innerText = studentCerts[0].studentName;
document.getElementById("wallet").innerText = wallet;
document.getElementById("score").innerText = `Trust Score: ${totalPoints}`;

studentCerts.forEach(c => {
  const li = document.createElement("li");
  li.innerHTML = `
    <strong>${c.course}</strong> – ${c.issuerName} ✅
    <small>${new Date(c.timestamp).toDateString()}</small>
  `;
  document.getElementById("timeline").appendChild(li);
});
