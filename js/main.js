const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("Login");
const errorMsg = document.getElementById("error_msg");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "user" && password === "1234") {
    alert("Login Successful");
    location.reload();
  } else {
    errorMsg.style.opacity = "1";
    setTimeout(() => {
      location.reload();
    }, 1500);
  }
});
