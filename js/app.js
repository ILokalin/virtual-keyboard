/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./favico.png": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/favico.png";

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = ["This app for Windows...","","Change language Alt+Shift","or special key on v-keyboard."];

/***/ }),
/* 4 */
/***/ (function(module) {

module.exports = ["<h3 class=\"display__popup-title\">Virtual keyboard</h3>","<p>App for Windows</p>","<p>Change language Alt+Shift</p>","<a href=\"https://rolling-scopes-school.github.io/checklist/\">Чек-лист для проверки...</a>"];

/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = ["                                                        ","  _/      _/              _/    _/                      "," _/      _/              _/  _/      _/_/    _/    _/   ","_/      _/  _/_/_/_/_/  _/_/      _/_/_/_/  _/    _/    "," _/  _/                _/  _/    _/        _/    _/     ","  _/                  _/    _/    _/_/_/    _/_/_/      ","                                               _/       ","                                          _/_/    "];

/***/ }),
/* 6 */
/***/ (function(module) {

module.exports = [[{"code":"Backquote","ruAll":true,"eng":{"key":"`","shiftKey":"~"},"ru":{"key":"ё","shiftKey":"Ё"}},{"code":"Digit1","ruShift":true,"eng":{"key":"1","shiftKey":"!"},"ru":{"key":"1","shiftKey":"!"}},{"code":"Digit2","ruShift":true,"eng":{"key":"2","shiftKey":"@"},"ru":{"key":"2","shiftKey":"\""}},{"code":"Digit3","ruShift":true,"eng":{"key":"3","shiftKey":"#"},"ru":{"key":"3","shiftKey":"№"}},{"code":"Digit4","ruShift":true,"eng":{"key":"4","shiftKey":"$"},"ru":{"key":"4","shiftKey":";"}},{"code":"Digit5","ruShift":true,"eng":{"key":"5","shiftKey":"%"},"ru":{"key":"5","shiftKey":"%"}},{"code":"Digit6","ruShift":true,"eng":{"key":"6","shiftKey":"^"},"ru":{"key":"6","shiftKey":":"}},{"code":"Digit7","ruShift":true,"eng":{"key":"7","shiftKey":"&"},"ru":{"key":"7","shiftKey":"?"}},{"code":"Digit8","ruShift":true,"eng":{"key":"8","shiftKey":"*"},"ru":{"key":"8","shiftKey":"*"}},{"code":"Digit9","ruShift":true,"eng":{"key":"9","shiftKey":"("},"ru":{"key":"9","shiftKey":"("}},{"code":"Digit0","ruShift":true,"eng":{"key":"0","shiftKey":")"},"ru":{"key":"0","shiftKey":")"}},{"code":"Minus","engOnly":true,"eng":{"key":"-","shiftKey":"_"},"ru":{"key":"-","shiftKey":"_"}},{"code":"Equal","engOnly":true,"eng":{"key":"=","shiftKey":"+"},"ru":{"key":"=","shiftKey":"+"}},{"code":"Backspace","control":true,"eng":{"key":"Backspace"}}],[{"code":"Tab","control":true,"eng":{"key":"Tab"}},{"code":"KeyQ","symbol":true,"eng":{"key":"q","shiftKey":"Q"},"ru":{"key":"й","shiftKey":"Й"}},{"code":"KeyW","symbol":true,"eng":{"key":"w","shiftKey":"W"},"ru":{"key":"ц","shiftKey":"Ц"}},{"code":"KeyE","symbol":true,"eng":{"key":"e","shiftKey":"E"},"ru":{"key":"у","shiftKey":"У"}},{"code":"KeyR","symbol":true,"eng":{"key":"r","shiftKey":"R"},"ru":{"key":"к","shiftKey":"К"}},{"code":"KeyT","symbol":true,"eng":{"key":"t","shiftKey":"T"},"ru":{"key":"е","shiftKey":"Е"}},{"code":"KeyY","symbol":true,"eng":{"key":"y","shiftKey":"Y"},"ru":{"key":"н","shiftKey":"Н"}},{"code":"KeyU","symbol":true,"eng":{"key":"u","shiftKey":"U"},"ru":{"key":"г","shiftKey":"Г"}},{"code":"KeyI","symbol":true,"eng":{"key":"i","shiftKey":"I"},"ru":{"key":"ш","shiftKey":"Ш"}},{"code":"KeyO","symbol":true,"eng":{"key":"o","shiftKey":"O"},"ru":{"key":"щ","shiftKey":"Щ"}},{"code":"KeyP","symbol":true,"eng":{"key":"p","shiftKey":"P"},"ru":{"key":"з","shiftKey":"З"}},{"code":"BracketLeft","ruAll":true,"eng":{"key":"[","shiftKey":"{"},"ru":{"key":"х","shiftKey":"Х"}},{"code":"BracketRigth","ruAll":true,"eng":{"key":"]","shiftKey":"}"},"ru":{"key":"ъ","shiftKey":"Ъ"}},{"code":"Backslash","ruSign":true,"eng":{"key":"\\","shiftKey":"|"},"ru":{"key":"\\","shiftKey":"/"}},{"code":"Delete","control":true,"eng":{"key":"Del"}}],[{"code":"CapsLock","control":true,"eng":{"key":"CapsLock"}},{"code":"KeyA","symbol":true,"eng":{"key":"a","shiftKey":"A"},"ru":{"key":"ф","shiftKey":"Ф"}},{"code":"KeyS","symbol":true,"eng":{"key":"s","shiftKey":"S"},"ru":{"key":"ы","shiftKey":"Ы"}},{"code":"KeyD","symbol":true,"eng":{"key":"d","shiftKey":"D"},"ru":{"key":"в","shiftKey":"В"}},{"code":"KeyF","symbol":true,"eng":{"key":"f","shiftKey":"F"},"ru":{"key":"а","shiftKey":"А"}},{"code":"KeyG","symbol":true,"eng":{"key":"g","shiftKey":"G"},"ru":{"key":"п","shiftKey":"П"}},{"code":"KeyH","symbol":true,"eng":{"key":"h","shiftKey":"H"},"ru":{"key":"р","shiftKey":"Р"}},{"code":"KeyJ","symbol":true,"eng":{"key":"j","shiftKey":"J"},"ru":{"key":"о","shiftKey":"О"}},{"code":"KeyK","symbol":true,"eng":{"key":"k","shiftKey":"K"},"ru":{"key":"л","shiftKey":"Л"}},{"code":"KeyL","symbol":true,"eng":{"key":"l","shiftKey":"L"},"ru":{"key":"д","shiftKey":"Д"}},{"code":"Semicolon","ruAll":true,"eng":{"key":";","shiftKey":":"},"ru":{"key":"ж","shiftKey":"Ж"}},{"code":"Quote","ruAll":true,"eng":{"key":"'","shiftKey":"\""},"ru":{"key":"э","shiftKey":"Э"}},{"code":"Enter","control":true,"eng":{"key":"Enter"}}],[{"code":"ShiftLeft","control":true,"eng":{"key":"&#8679;Shift"}},{"code":"KeyZ","symbol":true,"eng":{"key":"z","shiftKey":"Z"},"ru":{"key":"я","shiftKey":"Я"}},{"code":"KeyX","symbol":true,"eng":{"key":"x","shiftKey":"X"},"ru":{"key":"ч","shiftKey":"Ч"}},{"code":"KeyC","symbol":true,"eng":{"key":"c","shiftKey":"C"},"ru":{"key":"с","shiftKey":"С"}},{"code":"KeyV","symbol":true,"eng":{"key":"v","shiftKey":"V"},"ru":{"key":"м","shiftKey":"М"}},{"code":"KeyB","symbol":true,"eng":{"key":"b","shiftKey":"B"},"ru":{"key":"и","shiftKey":"И"}},{"code":"KeyN","symbol":true,"eng":{"key":"n","shiftKey":"N"},"ru":{"key":"т","shiftKey":"Т"}},{"code":"KeyM","symbol":true,"eng":{"key":"m","shiftKey":"M"},"ru":{"key":"ь","shiftKey":"Ь"}},{"code":"Comma","ruAll":true,"eng":{"key":",","shiftKey":"<"},"ru":{"key":"б","shiftKey":"Б"}},{"code":"Period","ruAll":true,"eng":{"key":".","shiftKey":">"},"ru":{"key":"ю","shiftKey":"Ю"}},{"code":"Slash","ruSign":true,"eng":{"key":"/","shiftKey":"?"},"ru":{"key":".","shiftKey":","}},{"code":"Lang","control":true,"eng":{"key":"Ru","shiftKey":""},"ru":{"key":"Eng","shiftKey":""}},{"code":"ArrowUp","control":true,"eng":{"key":"&uarr;"}},{"code":"ShiftRight","control":true,"eng":{"key":"&#8679;"}}],[{"code":"ControlLeft","control":true,"eng":{"key":"Ctrl"}},{"code":"MetaLeft","control":true,"eng":{"key":"Win"}},{"code":"AltLeft","control":true,"eng":{"key":"Alt"}},{"code":"Space","control":true,"eng":{"key":""}},{"code":"AltRight","control":true,"eng":{"key":"Alt"}},{"code":"ControlRight","control":true,"eng":{"key":"Ctrl"}},{"code":"ArrowLeft","control":true,"eng":{"key":"&larr;"}},{"code":"ArrowDown","control":true,"eng":{"key":"&darr;"}},{"code":"ArrowRight","control":true,"eng":{"key":"&rarr;"}}]];

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/app.scss
var app = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/Display/Display.js
const PLACEHOLDER_TEXT = __webpack_require__(3);
const MEMORY_FOR_CHECKER = __webpack_require__(4);
const CONSOLE_LOGO = __webpack_require__(5);

/* harmony default export */ var Display = (class {
  constructor () {
    this.display = document.createElement('div');
    this.textOut = document.createElement('textarea');
    this.textOut.placeholder = PLACEHOLDER_TEXT.join('\n')

    this.display.className = 'display';
    this.textOut.className = 'display__textarea';
    this.display.append(this.textOut);

    this.focus = this.focus.bind(this);
    this.outputKey = this.outputKey.bind(this);

    this.positionInString = this.textOut.selectionStart;
    this.isCursorMoving = false;
    this.isCursorInEndOfLine = false;

    this.textBuffer = '';

    CONSOLE_LOGO.forEach(string => {
      console.log(string);
    })
  }

  insert(parent) {
    parent.append(this.display);
  }

  focus() {
    this.textOut.focus();
  }

  popUpInfo() {
    const popUpOverlay = document.createElement('div');
    const popUpScreen = document.createElement('div');
    const popUpButton = document.createElement('button');

    popUpOverlay.className = 'display__popup-overlay';
    popUpScreen.className = 'display__popup';
    popUpButton.className = 'display__button';
    popUpButton.type = 'button';

    popUpScreen.innerHTML = MEMORY_FOR_CHECKER.join('');
    popUpButton.innerText = 'ok';
    popUpScreen.append(popUpButton);
    popUpOverlay.append(popUpScreen);

    const closePopUp = (event) => {
      const target = event.target;
      const isOverlay = target.classList.contains('display__popup-overlay');
      const isButton = target.classList.contains('display__button');

      if (isOverlay || isButton) {
        popUpOverlay.removeEventListener('click', closePopUp);
        popUpScreen.remove();
        popUpButton.remove();
        popUpOverlay.remove();
      }
    }

    this.display.append(popUpOverlay);
    popUpOverlay.addEventListener('click', closePopUp);

  }

  controlKeyOperation(code) {
    const operationForRange = (symbol, rangeStart, rangeEnd) => {
      this.textOut.setRangeText(symbol, rangeStart, rangeEnd, "end");
    }

    const moveCursorUpDown = (direct) => {
      const currentText = this.textOut.value;
      const stringTextArr = currentText.split('\n');
      let checkPosition = this.textOut.selectionStart;

      let index = 0;
      while (checkPosition > stringTextArr[index].length) {
        checkPosition -= stringTextArr[index].length + 1;
        index++;
      }

      if (direct === 'up') {
        if (index === 0) {
          this.textOut.selectionStart = 0
        } else if (this.isCursorInEndOfLine) {
          this.textOut.selectionStart = this.textOut.selectionStart - checkPosition - 1;
        } else if (this.isCursorMoving && stringTextArr[index-1].length >= this.positionInString) {
          this.textOut.selectionStart = this.textOut.selectionStart - checkPosition - (stringTextArr[index-1].length - this.positionInString + 1);
        } else if (stringTextArr[index-1].length >= checkPosition) {
          this.textOut.selectionStart = this.textOut.selectionStart - checkPosition - (stringTextArr[index-1].length - checkPosition + 1);
        } else {
          this.textOut.selectionStart = this.textOut.selectionStart - checkPosition - 1;
        }
        this.textOut.selectionEnd = this.textOut.selectionStart;
      } else {
        if (index === stringTextArr.length - 1) {
          this.textOut.selectionStart = currentText.length;
        } else if (this.isCursorMoving && stringTextArr[index+1].length >= this.positionInString) {
          this.textOut.selectionStart = this.textOut.selectionStart + stringTextArr[index].length - checkPosition + this.positionInString +1;
        } else if (stringTextArr[index+1].length >= checkPosition) {
          this.textOut.selectionStart = this.textOut.selectionStart + stringTextArr[index].length - checkPosition + checkPosition +1;
        } else {
          this.textOut.selectionStart = this.textOut.selectionStart + stringTextArr[index].length - checkPosition + stringTextArr[index + 1].length + 1;
        }
        this.textOut.selectionEnd = this.textOut.selectionStart;
      }

      if (!this.isCursorMoving) {
        this.positionInString = checkPosition;
      }
      this.isCursorMoving = true;
    }

    const operation = {
      backspace: () => {
        if (this.textOut.selectionStart === this.textOut.selectionEnd) {
          this.textOut.selectionStart--;
        } 

        operationForRange('', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      delete: () => {
        if (this.textOut.selectionStart === this.textOut.selectionEnd) {
          this.textOut.selectionEnd++;
        } 
 
        operationForRange('', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      space: () => {
        operationForRange(' ', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      enter: () => {
        operationForRange('\n', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      tab: ()=> {
        operationForRange('\t', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      arrowup: () => {
        moveCursorUpDown('up');
      },
      arrowdown: () => {
        moveCursorUpDown('down');
      },
      arrowleft: () => {
        if (this.textOut.selectionStart > 0) {
          this.textOut.selectionStart = --this.textOut.selectionEnd;
        }
        this.isCursorInEndOfLine = false;
      },
      arrowright: () => {
        this.textOut.selectionStart = ++this.textOut.selectionEnd;
        this.isCursorInEndOfLine = false;
      },
      cute: () => {
        let tempStart = this.textOut.selectionStart;

        this.textBuffer = this.textOut.value.slice(this.textOut.selectionStart,this.textOut.selectionEnd);
        operationForRange('', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.textOut.selectionStart = tempStart;
        this.textOut.selectionEnd = tempStart;

        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      copy: () => {
        let tempStart = this.textOut.selectionStart;

        this.textBuffer = this.textOut.value.slice(this.textOut.selectionStart,this.textOut.selectionEnd);
        this.textOut.selectionStart = tempStart;
        this.textOut.selectionEnd = tempStart;
  
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      paste: () => {
        operationForRange(this.textBuffer, this.textOut.selectionStart, this.textOut.selectionEnd);

        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      metaleft: () => {
        this.popUpInfo();
      }
    }

    operation[code]();
  }

  outputKey(keyObject) {
    const {control, key, code} = keyObject;

    if (control) {
      this.controlKeyOperation(code.toLowerCase());
    } else {
      this.isCursorMoving = false;
      this.isCursorInEndOfLine = false;
      this.textOut.setRangeText(key, this.textOut.selectionStart, this.textOut.selectionEnd, "end");
    }

    this.focus();
  }
});
// CONCATENATED MODULE: ./src/components/Info-panel/Info-panel.js
const CAPS_LOCK = '<p class="panel__caps">Caps Lock<span class="panel__caps-led"></span></p>',
      LANGUAGE  = '<p class="panel__lang">Language<span class="panel__lang-led"></span></p>',
      INSTRUCTION = '<p class="panel__instruction">Please use Alt+Shift for change language</p>';

/* harmony default export */ var Info_panel = (class {
  constructor (propsObject) {
    this.propsObject = propsObject;

    this.led = this.led.bind(this);

    this.infoPanel = document.createElement('div');
    this.infoPanel.innerHTML = CAPS_LOCK + LANGUAGE + INSTRUCTION;
    this.infoPanel.classList.add('panel');
  }

  insert(parent) {
    parent.append(this.infoPanel);
  }

  led(isCapsLock, language) {
    const capsLockLed = this.infoPanel.querySelector('.panel__caps-led');
    const languageLed = this.infoPanel.querySelector('.panel__lang-led');

    if (isCapsLock) {
      capsLockLed.classList.add('panel__caps-led--active');
    } else {
      capsLockLed.classList.remove('panel__caps-led--active');
    }

    languageLed.innerText = language;
  }
});
// CONCATENATED MODULE: ./src/components/Key/Key.js
/* Props
  {
    endEventKey: propsObject.focusToDispaly,
    language: this.state.language,
    loadLayout: this.whatTheNeedTypeNow,
    capsLock: this.state.capsLock,
    shift: 
  }*/

/* harmony default export */ var Key = (class {
  constructor (propsObject) {
    this.propsObject = propsObject;
    this.keyList = [];

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.press = this.press.bind(this);
    this.unPress = this.unPress.bind(this);
  }

  press(code) {
    const key = this.keyList.find(element => element.code === code);

    if (key) {
      key.classList.add('key--pressed');
    }
  }

  unPress(code) {
    const key = this.keyList.find(element => element.code === code);

    if (key) {
      key.classList.remove('key--pressed');
    }
  }

  handleKeyDown(event) {
    const target = event.target,
          targetKey = target.closest('.key');
    
    if (targetKey) {
      const pressedKeyOptions = {
         bubbles: true,
         code: targetKey.code
      }
      const myDownEvent = new KeyboardEvent('keydown', pressedKeyOptions);
      document.dispatchEvent(myDownEvent);
    }
  }

  handleKeyUp(event) {
    const target = event.target,
          targetKey = target.closest('.key');
    
    if (targetKey) {
      const pressedKeyOptions = {
         bubbles: true,
         code: targetKey.code
      }
      const myUpEvent = new KeyboardEvent('keyup', pressedKeyOptions);
      document.dispatchEvent(myUpEvent);

      setTimeout(() => {this.propsObject.endEventKey()})
    }
  }

  createKey(keyObject) {
    const {code, control} = keyObject;

    let elementDomKey = document.createElement('div');
    elementDomKey.classList.add('key');
    elementDomKey.code = code;

    elementDomKey.innerHTML = '<span class="key__name"></span>';
    elementDomKey.innerHTML += '<span class="key__up"></span>';

    if (control) {
      elementDomKey.control = true;
      elementDomKey.classList.add(`key--${code.toLowerCase()}`, 'key--control');
    }

    elementDomKey.addEventListener('mousedown', this.handleKeyDown)
    elementDomKey.addEventListener('mouseup', this.handleKeyUp)

    this.keyList.push(elementDomKey);
    this.setKeyLayout(elementDomKey);
    return elementDomKey;
  }

  changeLayout() {
    this.keyList .forEach(key => {
      this.setKeyLayout(key);
    })
  }

  setKeyLayout(elementKey) {
    const basicKeySign = elementKey.querySelector('.key__name'),
          altKeySign = elementKey.querySelector('.key__up');

    const whatLayoutNow = this.propsObject.loadLayout(elementKey.code);
    basicKeySign.innerHTML = whatLayoutNow.key;
    altKeySign.innerHTML = whatLayoutNow.shiftKey;
  }
});
// CONCATENATED MODULE: ./src/components/Keyboard/Keyboard.js

const KEYBOARD_LAYOUT = __webpack_require__(6);

/* Props
  {
    displayOutput: display.outputKey,
    focusToDispaly: display.focus,
    saveLanguage: storage.saveLanguageHistory,
    infoPanelLed: infoPanel.led,
    lang 
    }
*/

/* harmony default export */ var Keyboard = (class {
  constructor (propsObject) {
    this.propsObject = propsObject;

    this.state = {
      language: propsObject.lang,
      capsLock: false,
      shift: false,
      alt: false,
      control: false
    }

    this.isChangeLanguageProcess = false;

    this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    this.keyDownControl = this.keyDownControl.bind(this);
    this.keyUpControl = this.keyUpControl.bind(this);
    this.whatTheNeedTypeNow = this.whatTheNeedTypeNow.bind(this);

    this.key = new Key({
      endEventKey: propsObject.focusToDispaly,
      loadLayout: this.whatTheNeedTypeNow,
      language: this.state.language,
      capsLock: this.state.capsLock,
      shift: this.state.shift
      });

    KEYBOARD_LAYOUT.forEach(keyboardLine => {
      const line = document.createElement('div');
      line.classList.add('keyboard__line');

      keyboardLine.forEach(keyObject => {
        line.append(this.key.createKey(keyObject));
      })

      this.keyboard.append(line);
    })

    document.addEventListener('keyup', this.keyUpControl);
    document.addEventListener('keydown', this.keyDownControl);
  }

  insert(parent) {
    parent.append(this.keyboard);
  }

  indicateToPanel() {
    this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
  }

  setState(state) {
    const {capsLock, shift, alt, control, language, value} = state;

    if (capsLock) {
      this.state.capsLock = !this.state.capsLock;
      this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
      this.key.changeLayout();
    }

    if (shift) {
      const previusShiftState = this.state.shift;
      this.state.shift = value;

      if (previusShiftState !== value) {
        if (!this.state.alt) {
          this.key.changeLayout();
        }
      }
    }

    if (control) {
      this.state.control = value;
    }

    if (alt) {
      this.state.alt = value;
    }

    if (language) {
      if (!this.isChangeLanguageProcess) {
        this.state.language = this.state.language === 'eng' ? 'ru' : 'eng';
        this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
        this.propsObject.saveLanguage(this.state.language);
        this.key.changeLayout();

        this.isChangeLanguageProcess = true;
      }

    }
  }

  keyDownControl(event) {
    this.propsObject.focusToDispaly();

    const {key, code, isTrusted} = event;
    let isContinue = true;
    
    if(isTrusted) {
      this.key.press(event.code);
    }

    const controlKeyWorker = {
      CapsLock: () => {
        this.setState({capsLock: true});
        isContinue = false;
      },
      AltLeft: () => {
        if (event.shiftKey || this.state.shift) {
          this.setState({language: true});
          event.preventDefault();
        }
        this.setState({alt: true, value: true});
        isContinue = false;
      },
      AltRight: () => {
        controlKeyWorker.AltLeft();
      },
      ShiftLeft: () => {
        if (event.altKey || this.state.alt) {
          this.setState({language: true});
          event.preventDefault()
        }
        this.setState({shift: true, value: true});
        isContinue = false;
      },
      ShiftRight: () => {
        controlKeyWorker.ShiftLeft()
      },
      ControlLeft: () => {
        this.setState({control: true, value: true});
        isContinue = false;
      },
      ControlRight: () => {
        controlKeyWorker.ControlLeft();
      },
      KeyX: () => {
        if (this.state.control) {
          const commandKeyObject = {
            control: true,
            code: 'Cute'
          }
          this.propsObject.displayOutput(commandKeyObject);
          event.preventDefault();

          isContinue = false;
        }
      },
      KeyC: () => {
        if (this.state.control) {
          const commandKeyObject = {
            control: true,
            code: 'Copy'
          }
          this.propsObject.displayOutput(commandKeyObject);
          event.preventDefault();

          isContinue = false;
        }
      },
      KeyV: () => {
        if (this.state.control) {
          const commandKeyObject = {
            control: true,
            code: 'Paste'
          }
          this.propsObject.displayOutput(commandKeyObject);
          event.preventDefault();

          isContinue = false;
        }
      },
      Lang: () => {
        this.setState({language: true});
        isContinue = false;
        this.isChangeLanguageProcess = false;
      }
    }

    if (code in controlKeyWorker) {
      controlKeyWorker[code]();
    }

    if (!isTrusted && isContinue) {
      const pressedKeyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === event.code);
      const displayObject = {code}

      if (!pressedKeyObject.control) {
        const languagePack = pressedKeyObject[this.state.language] ? pressedKeyObject[this.state.language] : pressedKeyObject['eng'];

        const virtualKey = (this.state.shift || this.state.capsLock) ? languagePack.shiftKey : languagePack.key;

        displayObject.key = virtualKey;
      } 

      displayObject.control = pressedKeyObject.control;
      this.propsObject.displayOutput(displayObject);
    } 

    if (isTrusted && isContinue) {
      if (code === 'Tab') {
        const displayObject = {
          control: true,
          code
        }
        this.propsObject.displayOutput(displayObject);
      }

      const layoutNow = this.whatTheNeedTypeNow(code)
      if (layoutNow.isFindOk && !layoutNow.control) {
        if (!event.ctrlKey && !event.altKey) {
          event.preventDefault();
          const displayObject = {
            control: false,
            key: layoutNow.key,
            code
          }
          this.propsObject.displayOutput(displayObject);
        }
      }
    }
  }

  keyUpControl(event) {
    const {key, code, isTrusted} = event;

    if (code === 'AltLeft' || code === 'AltRight') {
      this.setState({alt: true, value: false});
      this.isChangeLanguageProcess = false;
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.setState({shift: true, value: false});
      this.isChangeLanguageProcess = false;
    }

    if (code === 'ControlLeft' || code === 'ControlRight') {
      this.setState({control: true, value: false});
    }

    this.key.unPress(event.code);
  }

  whatTheNeedTypeNow(code) {
    let key = '',
        shiftKey = '',
        isFindOk = true;

    const keyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === code);

    if (!keyObject) {
      return {key, shiftKey, isFindOk: false}
    } 

    const {eng, ru, control, ruAll, engOnly, symbol, ruShift, ruSign} = keyObject;
    const {language, capsLock, shift} = this.state;

    const layoutKey = language === 'eng' ? eng : ru,
          altLayoutKey = language === 'eng' ? ru : eng;

    if (control) {
      if (ru && ru.key) {
        key = layoutKey.key;
      } else {
        key = eng.key;
      }
    }

    if (symbol) {
      if (capsLock) {
        key = shift ? layoutKey.key : layoutKey.shiftKey;
        shiftKey = shift ? altLayoutKey.key : altLayoutKey.shiftKey;
      } else {
        key = shift ? layoutKey.shiftKey : layoutKey.key;
        shiftKey = shift ? altLayoutKey.shiftKey : altLayoutKey.key;
      }
    }

    if (ruAll) {
      if (language === 'eng') {
          key = shift ? layoutKey.shiftKey : layoutKey.key;
        if (capsLock) {
          shiftKey = shift ? altLayoutKey.key : altLayoutKey.shiftKey;
        } else {
          shiftKey = shift ? altLayoutKey.shiftKey : altLayoutKey.key;
        }
      } else if (language === 'ru') {
        if (capsLock) {
          key = shift ? layoutKey.key : layoutKey.shiftKey;
          shiftKey = shift ? altLayoutKey.key : altLayoutKey.shiftKey;
        } else {
          key = shift ? layoutKey.shiftKey : layoutKey.key;
          shiftKey = shift ? altLayoutKey.shiftKey : altLayoutKey.key;
        }
      }
    }

    if (ruShift) {
      key = !shift ? layoutKey.key : layoutKey.shiftKey;
      shiftKey = shift ? '' : layoutKey.shiftKey;
    }

    if (ruSign) {
      key = shift ? layoutKey.shiftKey : layoutKey.key;
      shiftKey = !shift ? layoutKey.shiftKey : layoutKey.key;
    }

    if (engOnly) {
      key = shift ? eng.shiftKey : eng.key;
      shiftKey = !shift ? eng.shiftKey : eng.key;
    }

    return {key, shiftKey, isFindOk, control}
  }
});

// CONCATENATED MODULE: ./src/components/Storage/Storage.js
/* harmony default export */ var Storage = (class {
  saveLanguageHistory (language) {
    localStorage.setItem('virtualKeyboardLanguage', language);
  }

  loadLanguageHistory () {
    let response = localStorage.getItem('virtualKeyboardLanguage');

    if (!response) {
      response = 'eng';
      this.saveLanguageHistory(response);
    }

    return response;
  }
});
// CONCATENATED MODULE: ./src/app.js

__webpack_require__(1);






const storage = new Storage();
const display = new Display();
const infoPanel = new Info_panel();

const keyboard = new Keyboard({
  displayOutput: display.outputKey,
  focusToDispaly: display.focus,
  saveLanguage: storage.saveLanguageHistory,
  infoPanelLed: infoPanel.led,
  lang: storage.loadLanguageHistory()
  });

const body = document.querySelector('body');
const container = document.createElement('div');
body.classList.add('page');
container.classList.add('page__container');
body.append(container);

display.insert(container);
infoPanel.insert(container);
keyboard.insert(container);
display.focus();


/***/ })
/******/ ]);