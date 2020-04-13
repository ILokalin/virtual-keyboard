const PLACEHOLDER_TEXT = require('./placeholder.json');
const MEMORY_FOR_CHECKER = require('./instruction.json');
const CONSOLE_LOGO = require('./console-logo.json');

export default class {
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
}
