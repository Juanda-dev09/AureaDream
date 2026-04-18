/**
 * Sesión front (localStorage): icono usuario → login o perfil; cierre de sesión.
 */
(function () {
  var AUTH_KEY = "aureaDream_auth";

  function isLoggedIn() {
    try {
      return localStorage.getItem(AUTH_KEY) === "1";
    } catch (e) {
      return false;
    }
  }

  function inPagesFolder() {
    var p = window.location.pathname || "";
    return /[/\\]pages[/\\]/.test(p);
  }

  function setUserNavLink() {
    var link = document.querySelector(".header-icon-link");
    if (!link) return;

    var inPages = inPagesFolder();
    if (isLoggedIn()) {
      link.href = inPages ? "./perfil.html" : "src/pages/perfil.html";
      link.setAttribute("aria-label", "Mi cuenta");
    } else {
      link.href = inPages ? "./login.html" : "src/pages/login.html";
      link.setAttribute("aria-label", "Iniciar sesión");
    }
  }

  function initLogout() {
    var btn = document.getElementById("perfil-logout");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      try {
        localStorage.removeItem(AUTH_KEY);
      } catch (err) {}
      window.location.href = "../../index.html";
    });
  }

  function initChangeAccount() {
    var btn = document.getElementById("perfil-change-account");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      try {
        localStorage.removeItem(AUTH_KEY);
      } catch (err) {}
      window.location.href = "./login.html";
    });
  }

  function start() {
    setUserNavLink();
    initLogout();
    initChangeAccount();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
