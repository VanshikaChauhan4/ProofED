document.getElementById("issueForm").addEventListener("submit", async (e) => {
  e.preventDefault()

  const student = document.getElementById("student").value
  const course = document.getElementById("course").value

  const res = await fetch("http://localhost:5000/api/cert/issue", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      student,
      course,
      institute: "ProofED"
    })
  })

  const data = await res.json()

  if (!data.success) {
    alert("Error issuing certificate")
    return
  }

  // Populate certificate UI
  document.getElementById("certStudent").innerText = data.certificate.student
  document.getElementById("certCourse").innerText = data.certificate.course
  document.getElementById("certID").innerText = data.certificate._id
  document.getElementById("certDate").innerText =
    new Date(data.certificate.issuedAt).toDateString()

  document.getElementById("certificatePreview").classList.remove("hidden")
})
