export default class {
  constructor () {
    this.textOut = document.createElement('textarea');

    this.focus = this.focus.bind(this);
    this.outputKey = this.outputKey.bind(this);
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

    const operation = {
      backspace: () => {
        if (this.textOut.selectionStart === this.textOut.selectionEnd) {
          this.textOut.selectionStart--;
        } 

        operationForFange('', this.textOut.selectionStart, this.textOut.selectionEnd);
      },
      delete: () => {
        if (this.textOut.selectionStart === this.textOut.selectionEnd) {
          this.textOut.selectionEnd++;
        } 
 
        operationForFange('', this.textOut.selectionStart, this.textOut.selectionEnd);
      },
      space: () => {
        operationForFange(' ', this.textOut.selectionStart, this.textOut.selectionEnd);
      },
      enter: () => {
        operationForFange('\n', this.textOut.selectionStart, this.textOut.selectionEnd);
      },
      tab: ()=> {
        operationForFange('\t', this.textOut.selectionStart, this.textOut.selectionEnd);
      }
    }

    operation[code]();
  }

  outputKey(keyObject) {
    const {control, key, code} = keyObject;
 
    if (control) {
      this.controlKeyOperation(code.toLowerCase());
    } else {
      this.textOut.setRangeText(key, this.textOut.selectionStart, this.textOut.selectionEnd, "end");
    }

    this.focus();
  }
}