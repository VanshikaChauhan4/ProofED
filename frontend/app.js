
function generateCertID() {
  return "CERT-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}
const issueForm = document.getElementById("issueForm");

if (issueForm) {
  issueForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const student = document.getElementById("student").value;
    const course = document.getElementById("course").value;
    const theme = document.getElementById("themeSelect").value;

    const certID = generateCertID();
    const certDate = new Date().toLocaleDateString();

    const data = {
      id: certID,
      student,
      course,
      inst: "ProofED Institute",
      date: certDate,
      theme
    };
    localStorage.setItem("proofed_cert", JSON.stringify(data));
    document.getElementById("certStudent").innerText = student;
    document.getElementById("certCourse").innerText = course;
    document.getElementById("certInstitute").innerText = data.inst;
    document.getElementById("certID").innerText = certID;
    document.getElementById("certDate").innerText = certDate;
    const certBox = document.querySelector(".certificate");
    certBox.className = `certificate ${theme}`;
    const qrBox = document.getElementById("certQR");
    qrBox.innerHTML = "";
    new QRCode(qrBox, certID);
    document.getElementById("certificatePreview").classList.remove("hidden");
    document.getElementById("successOverlay").classList.remove("hidden");
  });
}

/* =========================
   CLOSE SUCCESS POPUP
========================= */
function closeSuccess() {
  document.getElementById("successOverlay").classList.add("hidden");
}

/* =========================
   VERIFY CERTIFICATE
========================= */
function verifyCert() {
  const input = document.getElementById("verifyInput").value;
  const stored = JSON.parse(localStorage.getItem("proofed_cert"));
  const result = document.getElementById("verifyResult");

  if (!input || !result) return;

  result.classList.remove("hidden");

  if (stored && input === stored.id) {
    result.innerHTML = `
      <h3>Credential Verified ✅</h3>
      <p><strong>${stored.course}</strong></p>
      <p>${stored.student} — ${stored.inst}</p>
    `;
  } else {
    result.innerHTML = `<h3>Invalid or Unverified ❌</h3>`;
  }
}

/* =========================
   DOWNLOAD PDF
========================= */
function downloadPDF() {
  const cert = document.querySelector(".certificate");

  html2pdf()
    .from(cert)
    .set({
      margin: 0.5,
      filename: "ProofED-Certificate.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "landscape" }
    })
    .save();
}
