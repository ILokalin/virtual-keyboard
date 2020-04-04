import Key from 'Components/Key';
const KEYBOARD_LAYOUT = require('./keyboard-layout.json');

export default class {
  constructor () {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    const key = new Key();

    KEYBOARD_LAYOUT.forEach(keyboardLine => {
      const line = document.createElement('div');
      line.classList.add('keyboard__line');

      keyboardLine.forEach(keyObject => {
        line.append(key.createKey(keyObject, 'eng'));
      })

      this.keyboard.append(line);
    })
  }

  insert(parent) {
    parent.append(this.keyboard);
  }
}

