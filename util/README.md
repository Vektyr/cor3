# util/
This folder contains additional tooling for the ARG that aren't files from the ARG itself. 

### radio_capture.bat
This script requires [FFMPEG](https://www.ffmpeg.org/download.html) to function. This script is used to pull the constant Icecast radio streams from cor3. This script purposefully discards corrupt mp3 frames, as it causes the capture to fail. It purposefully reconnects on EOF, as many of the radio segments were returing false EOFs. On line 14, update the name of the station to what was found on the Radio tool in game, eg. 0a7e. On line 22, update the frequency to be the in game frequency of the radio, eg. 155. You'll need to manually create the output folder of "155mhz_segments" at that time. The script, under perfect circumstances, will run indefinitely until ended, splitting streams at EOF or every 5 minutes.

### radio_concat.bat
This script requires [FFMPEG](https://www.ffmpeg.org/download.html) to function. This script is used to combine all the segmented audio from pieces from the radio_capture script. Drop this script into the folder of segments, run it, and you will have a fully combined mp3 of the recording.

### anti_glitch.js
Removes the glitch and shake screen effect after the "Firewall breach" browser minigame or the "Maze" minigame appear. Either paste the contents of the file into your browser's console, or (the recommended method) create a new bookmark in the browser and paste the following into the URL field:
```js
javascript:void%20function(){document.querySelectorAll(%22.system-error-shake%22).forEach(a=%3Ea.classList.remove(%22system-error-shake%22));var%20a=document.querySelector(%22[data-component=\%22SystemErrorSvgFilter\%22]%22);a%26%26(a.style.display=%22none%22);var%20b=document.getElementById(%22glitch-background%22);b%26%26(b.style.display=%22none%22);var%20c=document.getElementById(%22video-waves%22);c%26%26(c.style.display=%22none%22)}()%3B
```

### locale_fix.js
Fixes requests to english translation of the site to load the correct file. Run the code as soon as the site starts loading. Again recommended to be used as a bookmarklet:
```js
javascript:void%20function(){const%20a=window.fetch;window.fetch=(...b)=%3E(%22string%22==typeof%20b[0]%26%26(b[0]=b[0].replace(%22/en-US/browser.json%22,%22/en/browser.json%22),b[0]=b[0].replace(%22/en-US/translation.json%22,%22/en/translation.json%22)),a(...b))}()%3B
```