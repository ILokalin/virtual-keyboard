import Key from 'Components/Key';
const KEYBOARD_LAYOUT = require('./keyboard-layout.json');

export default class {
  constructor () {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    this.keyDownControl = this.keyDownControl.bind(this);
    this.keyUpControl = this.keyUpControl.bind(this);

    this.key = new Key();

    KEYBOARD_LAYOUT.forEach(keyboardLine => {
      const line = document.createElement('div');
      line.classList.add('keyboard__line');

      keyboardLine.forEach(keyObject => {
        line.append(this.key.createKey(keyObject, 'eng'));
      })

      this.keyboard.append(line);
    })

    document.addEventListener('keyup', this.keyUpControl);
    document.addEventListener('keydown', this.keyDownControl);
    document.addEventListener('blur', event => {
      debugger
    })
  }

  // onClickKey(pressObject) {
  //   const {code, ru, eng} = pressObject;
  //   console.log(code);
  // }

  insert(parent) {
    parent.append(this.keyboard);
  }

  keyDownControl(event) {
    console.log('mama down', event.code)
    this.key.press(event.code);
  }

  keyUpControl(event) {
    console.log('mama up', event.code)
    this.key.unPress(event.code);
  }
}

