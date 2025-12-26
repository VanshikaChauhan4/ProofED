const API = "http://localhost:5000";

function issue() {
  fetch(API + "/issue", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      studentId: studentId.value,
      title: title.value,
      issuer: issuer.value,
    }),
  })
    .then(res => res.json())
    .then(data => alert("Issued Successfully!"));
}

function loadProfile() {
  fetch(API + "/student/" + sid.value)
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(d => {
        list.innerHTML += `<li>${d.title} — ${d.issuer}</li>`;
      });
    });
}

function verify() {
  fetch(API + "/verify/" + vid.value)
    .then(res => res.json())
    .then(data => {
      result.innerText = JSON.stringify(data, null, 2);
    });
}
