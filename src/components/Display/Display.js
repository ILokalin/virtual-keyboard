export default class {
  constructor () {
    this.textOut = document.createElement('textarea');
  }

  insert(parent) {
    parent.append(this.textOut);
  }

  focus() {
    this.textOut.focus();
  }

}