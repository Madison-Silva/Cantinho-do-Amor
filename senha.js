function checkPassword() {
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  const correctPassword = "28102024"; // data do namoro

  if (password === correctPassword) {
    // 👉 AQUI entra o LINK
    window.location.href = "interfaci.html";
  } else {
    error.style.display = "block";
  }
}
