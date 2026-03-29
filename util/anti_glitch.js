document.querySelectorAll(".system-error-shake").forEach(n => n.classList.remove("system-error-shake"))
var glitchEl = document.querySelector('[data-component="SystemErrorSvgFilter"]');
glitchEl && (glitchEl.style.display = "none")
var glitchBG = document.getElementById("glitch-background");
glitchBG && (glitchBG.style.display = "none")
var glitchWave = document.getElementById("video-waves");
glitchWave && (glitchWave.style.display = "none")