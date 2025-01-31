document.addEventListener("DOMContentLoaded", function () {
  let registerButton = document.getElementById("register-button");
  let loginButton = document.getElementById("login-button");

  registerButton.onclick = function () {
    let fullName = document.getElementById("fullname").value;
    let licenseNumber = document.getElementById("license-number").value;

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("licenseNumber", licenseNumber);

    window.location.href = "personal-account.html";
  };
});

// Код для страницы personal-account.html
document.addEventListener("DOMContentLoaded", function () {
  let fullNameElement = document.querySelector(".full-name");
  let licenseNumberElement = document.querySelector(".number");

  let fullName = localStorage.getItem("fullName");
  let licenseNumber = localStorage.getItem("licenseNumber");

  if (fullName) {
    fullNameElement.textContent = fullName;
  }
  if (licenseNumber) {
    licenseNumberElement.textContent = licenseNumber;
  }
});

// registerButton // loginButton
