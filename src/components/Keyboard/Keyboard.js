import Key from 'Components/Key';
const KEYBOARD_LAYOUT = require('./keyboard-layout.json');

export default class {
  constructor (propsObject) {
    this.propsObject = propsObject;

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    this.keyDownControl = this.keyDownControl.bind(this);
    this.keyUpControl = this.keyUpControl.bind(this);

    this.key = new Key({
      endEventKey: propsObject.focusToDispaly
      });

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
  }

  insert(parent) {
    parent.append(this.keyboard);
  }

  keyDownControl(event) {
    console.log('mama down', event.code)

    if (!event.isTrusted) {
      let pressedKeyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === event.code);

      if (pressedKeyObject) {
        pressedKeyObject.lang = 'eng';
        this.propsObject.displayOutput(pressedKeyObject);
      }
    } else {
      this.key.press(event.code);
    }
  }

  keyUpControl(event) {
    console.log('mama up', event.code)
    this.key.unPress(event.code);
  }
}

