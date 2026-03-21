# util/
This folder contains additional tooling for the ARG that aren't files from the ARG itself. 

### radio_capture.bat
This script requires [FFMPEG](https://www.ffmpeg.org/download.html) to function. This script is used to pull the constant Icecast radio streams from cor3. This script purposefully discards corrupt mp3 frames, as it causes the capture to fail. It purposefully reconnects on EOF, as many of the radio segments were returing false EOFs. On line 14, update the name of the station to what was found on the Radio tool in game, eg. 0a7e. On line 22, update the frequency to be the in game frequency of the radio, eg. 155. You'll need to manually create the output folder of "155mhz_segments" at that time. The script, under perfect circumstances, will run indefinitely until ended, splitting streams at EOF or every 5 minutes.

### radio_concat.bat
This script requires [FFMPEG](https://www.ffmpeg.org/download.html) to function. This script is used to combine all the segmented audio from pieces from the radio_capture script. Drop this script into the folder of segments, run it, and you will have a fully combined mp3 of the recording.

### anti_glitch.js
Removes the glitch and shake screen effect after the "Firewall breach" browser minigame or the "Maze" minigame appear. Either paste the contents of the file into your browser's console, or (the recommended method) create a new bookmark in the browser and paste the following into the URL field:
```js
javascript:(function()%7Bdocument.querySelectorAll(%22.system-error-shake%22).forEach(n%20%3D%3E%20n.classList.remove(%22system-error-shake%22))%0Avar%20glitchEl%20%3D%20document.querySelector('%5Bdata-component%3D%22SystemErrorSvgFilter%22%5D')%3B%0AglitchEl%20%26%26%20(glitchEl.style.display%20%3D%20%22none%22)%7D)()%3B
```