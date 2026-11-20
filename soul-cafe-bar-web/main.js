/* =========================================================
   Soul Café Bar — main.js
   - Menú móvil
   - Banner de cookies (guarda la elección en localStorage)
   - Formulario PQRS (arma un mailto: o un mensaje de WhatsApp)
   - Año actual en el footer
   Sin dependencias. Si el JS falla, el sitio sigue siendo legible.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Configuración: cambia estos datos ---------- */
  var CONFIG = {
    // Número de WhatsApp en formato internacional, sin "+", espacios ni guiones.
    whatsapp: "573114831951",
    // Correo para PQRS y datos personales.
    correo: "[CORREO]",
    // Nombre de la clave en localStorage para la elección de cookies.
    claveCookies: "soul_cookies_v1"
  };

  /* ---------- Utilidades de almacenamiento (con try/catch) ---------- */
  function leer(clave) {
    try { return window.localStorage.getItem(clave); } catch (e) { return null; }
  }
  function guardar(clave, valor) {
    try { window.localStorage.setItem(clave, valor); return true; } catch (e) { return false; }
  }

  /* ---------- Menú móvil ---------- */
  var boton = document.querySelector(".menu-boton");
  var menu = document.getElementById("menu-principal");
  if (boton && menu) {
    boton.addEventListener("click", function () {
      var abierto = menu.classList.toggle("abierto");
      boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("abierto")) {
        menu.classList.remove("abierto");
        boton.setAttribute("aria-expanded", "false");
        boton.focus();
      }
    });
  }

  /* ---------- Año en el footer ---------- */
  var anio = document.getElementById("anio");
  if (anio) { anio.textContent = String(new Date().getFullYear()); }

  /* ---------- Cookies ---------- */
  var banner = document.getElementById("cookie-banner");

  // Aquí se cargan los scripts opcionales SOLO si el usuario acepta.
  // Por ahora no hay ninguno instalado. Cuando instales Google Analytics
  // o el píxel de Meta, pega su código dentro de esta función.
  function cargarCookiesOpcionales() {
    // Ejemplo (no activo):
    // var s = document.createElement("script");
    // s.async = true;
    // s.src = "https://www.googletagmanager.com/gtag/js?id=[ID-ANALYTICS]";
    // document.head.appendChild(s);
  }

  function aplicarEleccion(valor) {
    if (valor === "aceptadas") { cargarCookiesOpcionales(); }
    var estado = document.getElementById("estado-cookies");
    if (estado) {
      estado.textContent = valor === "aceptadas"
        ? "Aceptaste las cookies opcionales."
        : valor === "rechazadas"
          ? "Rechazaste las cookies opcionales. Solo usamos las necesarias."
          : "Todavía no has elegido.";
    }
  }

  function mostrarBanner() {
    if (!banner) { return; }
    banner.hidden = false;
    var primero = banner.querySelector("button");
    if (primero) { primero.focus({ preventScroll: true }); }
  }

  function elegir(valor) {
    guardar(CONFIG.claveCookies, valor);
    aplicarEleccion(valor);
    if (banner) { banner.hidden = true; }
  }

  if (banner) {
    var aceptar = banner.querySelector("[data-cookies='aceptar']");
    var rechazar = banner.querySelector("[data-cookies='rechazar']");
    if (aceptar) { aceptar.addEventListener("click", function () { elegir("aceptadas"); }); }
    if (rechazar) { rechazar.addEventListener("click", function () { elegir("rechazadas"); }); }

    var guardada = leer(CONFIG.claveCookies);
    if (guardada === "aceptadas" || guardada === "rechazadas") {
      aplicarEleccion(guardada);
    } else {
      aplicarEleccion(null);
      mostrarBanner();
    }
  }

  // Cualquier botón con data-abrir-cookies vuelve a mostrar el banner.
  var abridores = document.querySelectorAll("[data-abrir-cookies]");
  for (var i = 0; i < abridores.length; i++) {
    abridores[i].addEventListener("click", mostrarBanner);
  }

  /* ---------- Formulario PQRS ---------- */
  var form = document.getElementById("form-pqrs");
  if (form) {
    var error = document.getElementById("form-error");

    function armarMensaje() {
      var d = new FormData(form);
      var lineas = [
        "Hola, Soul Café Bar. Envío una " + d.get("tipo") + ":",
        "",
        "Nombre: " + d.get("nombre"),
        "Teléfono: " + (d.get("telefono") || "No indicado"),
        "Correo: " + (d.get("correo") || "No indicado"),
        "Fecha del hecho: " + (d.get("fecha") || "No indicada"),
        "Canal: " + d.get("canal"),
        "",
        "Mensaje:",
        d.get("mensaje"),
        "",
        "Acepto el tratamiento de mis datos para gestionar esta solicitud."
      ];
      return { asunto: "PQRS - " + d.get("tipo") + " - " + d.get("nombre"), cuerpo: lineas.join("\n") };
    }

    function validar() {
      if (!form.checkValidity()) {
        form.reportValidity();
        if (error) { error.textContent = "Revisa los campos marcados como obligatorios."; }
        return false;
      }
      if (error) { error.textContent = ""; }
      return true;
    }

    // Recordamos qué botón se usó (respaldo para navegadores sin e.submitter).
    var ultimaVia = "correo";
    var botonesEnvio = form.querySelectorAll("button[type='submit']");
    for (var j = 0; j < botonesEnvio.length; j++) {
      botonesEnvio[j].addEventListener("click", function () { ultimaVia = this.value; });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validar()) { return; }
      var m = armarMensaje();
      var via = (e.submitter && e.submitter.value) || ultimaVia;
      if (via === "whatsapp") {
        window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(m.cuerpo), "_blank", "noopener");
      } else {
        window.location.href = "mailto:" + CONFIG.correo +
          "?subject=" + encodeURIComponent(m.asunto) +
          "&body=" + encodeURIComponent(m.cuerpo);
      }
    });
  }
})();
