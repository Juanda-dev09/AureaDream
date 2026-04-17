/**
 * Login / registro: marca sesión y redirige al inicio (home).
 */
var AUTH_KEY = "aureaDream_auth";

var form = document.querySelector("form.login-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    try {
      localStorage.setItem(AUTH_KEY, "1");
    } catch (err) {}
    window.location.href = "../../index.html";
  });
}
