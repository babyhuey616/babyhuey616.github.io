const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "pass") {
        location.assign("/Ticket_System/Homepage (Steven Graham)/homepage.html");
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})

