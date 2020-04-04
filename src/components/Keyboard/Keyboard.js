import Key from 'Components/Key';

const KEYBOARD_LINE1 = [
  {code: 'Backquote', eng: {key: '`', shiftKey: '~'}},
  {code: 'Digit1', eng: {key: '1', shiftKey: '!'}},
  {code: 'Digit2', eng: {key: '2', shiftKey: '@'}},
  {code: 'Digit3', eng: {key: '3', shiftKey: '#'}},
  {code: 'Digit4', eng: {key: '4', shiftKey: '$'}},
  {code: 'Digit5', eng: {key: '5', shiftKey: '%'}},
  {code: 'Digit6', eng: {key: '6', shiftKey: '^'}},
  {code: 'Digit7', eng: {key: '7', shiftKey: '&'}},
  {code: 'Digit8', eng: {key: '8', shiftKey: '*'}},
  {code: 'Digit9', eng: {key: '9', shiftKey: '('}},
  {code: 'Digit0', eng: {key: '0', shiftKey: ')'}},
  {code: 'Minus', eng: {key: '-', shiftKey: '_'}},
  {code: 'Equal', eng: {key: '=', shiftKey: '+'}},
  {code: 'Backspace', control: true, eng: {key: 'Backspace'}},
  ]

export default class {
  constructor () {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    const key = new Key();

    const line = document.createElement('div');
    line.classList.add('keyboard__line');
    KEYBOARD_LINE1.forEach(keyObject => {
      line.append(key.createKey(keyObject, 'eng'));
    })

    this.keyboard.append(line);
  }

  insert(parent) {
    parent.append(this.keyboard);
  }
}

