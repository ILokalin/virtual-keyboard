# Virtual keyboard


### Structure of repo

This repository have branches:
- master
- keyborad
- gh-page

### Demo

Link for demo: [virtual keyboard](https://ilokalin.github.io/virtual-keyboard/)

### Install

Node.js is requerd<br>
App create for windows layout (Not Linux or MacOS)

Clone or download repository from github pages

Use `npm i` for install node modules

`npm start` for start dev-server http://localhost:8080/

`npm run build` for build app

### About app. Use and check

- For change language use Alt+Shift or special key (Ru/Eng) on virtual keyboard.
- The virtual keyboard can be used both in together with a physical device or separately.
- App checked events for down and up all keys and indicate pressed process as CSS animation.
- App indicate current mod for pressed control keys (shift, capsLock) and selected language in virtual and physical device.
- Support combinations: Ctrl+C, Ctrl+X, Ctrl+V (but use custom clipboard).
- Your language choice will be saved in storage of browser. 
- Key covers show the symbol for layout what you selected when using a virtual keyboard or physical device.
- Arrow buttons allow to move the cursor on text area.
- Support English and Russian language
- For check use [check-list](https://rolling-scopes-school.github.io/checklist/)

Features

- The virtual keyboard may ignore the current layout selected in OS.
- In Russia layout Wondows generate specifical events for left Control when pressed right Alt

### Автор

- [Ilya Lokain](https://github.com/ILokalin)
