document.querySelectorAll(".system-error-shake").forEach(n => n.classList.remove("system-error-shake"))
var glitchEl = document.querySelector('[data-component="SystemErrorSvgFilter"]');
glitchEl && (glitchEl.style.display = "none")