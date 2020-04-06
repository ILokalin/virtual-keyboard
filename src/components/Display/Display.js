const PLACEHOLDER_TEXT = [
  'This app for Windows!',
  'Automatically detect keyboard layout', 
  'when you start type...','',
  'Change language Alt+Shift'
]

export default class {
  constructor () {
    this.textOut = document.createElement('textarea');
    this.textOut.placeholder = PLACEHOLDER_TEXT.join('\n')

    this.focus = this.focus.bind(this);
    this.outputKey = this.outputKey.bind(this);

    this.positionInString = this.textOut.selectionStart;
    this.isCursorMoving = false;
    this.isCursorInEndOfLine = false;
  }

  insert(parent) {
    parent.append(this.textOut);
  }

  focus() {
    this.textOut.focus();
  }

  controlKeyOperation(code) {
    const operationForFange = (symbol, rangeStart, rangeEnd) => {
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

      // if (!this.isCursorMoving && checkPosition === stringTextArr[index].length) {
      //   this.isCursorInEndOfLine = true;
      // }

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

        operationForFange('', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      delete: () => {
        if (this.textOut.selectionStart === this.textOut.selectionEnd) {
          this.textOut.selectionEnd++;
        } 
 
        operationForFange('', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      space: () => {
        operationForFange(' ', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      enter: () => {
        operationForFange('\n', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      tab: ()=> {
        operationForFange('\t', this.textOut.selectionStart, this.textOut.selectionEnd);
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
        const textBuffer = this.textOut.value.slice(this.textOut.selectionStart,this.textOut.selectionEnd);
        operationForFange('', this.textOut.selectionStart, this.textOut.selectionEnd);
        this.textOut.selectionStart = tempStart;
        this.textOut.selectionEnd = tempStart;

        navigator.clipboard.writeText(this.textBuffer)
          .then(() => {
            
          })
          .catch(err => {

          })

        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      copy: () => {
        let tempStart = this.textOut.selectionStart;
        const textBuffer = this.textOut.value.slice(this.textOut.selectionStart,this.textOut.selectionEnd);
        this.textOut.selectionStart = tempStart;
        this.textOut.selectionEnd = tempStart;

        navigator.clipboard.writeText(this.textBuffer)
          .then(() => {

          })
          .catch(err => {

          })

        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
      },
      paste: async () => {
        let textBuffer = '';
        await navigator.clipboard.readText()
          .then(text => {
            textBuffer = text
          })
          .catch(err => {

          })
        operationForFange(textBuffer, this.textOut.selectionStart, this.textOut.selectionEnd);
        this.isCursorMoving = false;
        this.isCursorInEndOfLine = false;
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