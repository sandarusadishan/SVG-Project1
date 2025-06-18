// Signup
if (document.getElementById("signupForm")) {
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful!");
    window.location.href = "login.html";
  });
}

// Login
if (document.getElementById("loginForm")) {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem("loggedIn", "true");
      alert("Login successful!");
      window.location.href = "../dashboard.html";
    } else {
      alert("Invalid credentials!");
    }
  });
}

// Logout logic (can be triggered on a logout button)
document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.querySelector(".btn-outline-secondary");
  if (logoutButton) {
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      window.location.href = "pages/login.html";
    });
  }
});
