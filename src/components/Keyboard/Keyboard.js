import Key from 'Components/Key';
const KEYBOARD_LAYOUT = require('./keyboard-layout.json');

export default class {
  constructor (propsObject) {
    this.propsObject = propsObject;

    this.state = {
      language: propsObject.lang,
      capsLock: false,
      shift: false,
      alt: false,
      control: false
    }

    this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    this.keyDownControl = this.keyDownControl.bind(this);
    this.keyUpControl = this.keyUpControl.bind(this);

    this.key = new Key({
      endEventKey: propsObject.focusToDispaly,
      language: this.state.language
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

  indicateToPanel() {
    this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
  }

  setState(state) {
    const {capsLock, shift, alt, control, language, value} = state;

    if (capsLock) {
      this.state.capsLock = !this.state.capsLock;
      this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
    }

    if (shift) {
      this.state.shift = value;
    }

    if (alt) {
      this.state.alt = value;
    }

    if (language) {
      this.state.language = this.state.language === 'eng' ? 'ru' : 'eng';
      this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
      this.propsObject.saveLanguage(this.state.language);
      this.key.changeLanguage(this.state.language);
    }

    console.log(this.state);
    
  }

  keyDownControl(event) {
    // console.log('mama down', event.code)
    const {key, code, isTrusted} = event;
    let isContinue = true;

    if (key === 'CapsLock') {
      this.setState({capsLock: true});
      isContinue = false;
    }

    if (key === 'Alt') {
      this.setState({alt: true, value: true});
      isContinue = false;
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (event.altKey || this.state.alt) {
        this.setState({language: true})
      }
      this.setState({shift: true, value: true});
      isContinue = false;
    }

    if (!isTrusted && isContinue) {
      let pressedKeyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === event.code);

      if (pressedKeyObject) {
        pressedKeyObject.lang = 'eng';
        this.propsObject.displayOutput(pressedKeyObject);
      }
    } 

    if (isTrusted) {
      this.key.press(event.code);
    }
  }

  keyUpControl(event) {
    // console.log('mama up', event.code)
    const {key, code, isTrusted} = event;

    if (key === 'Alt') {
      this.setState({alt: true, value: false});
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.setState({shift: true, value: false});
    }

    this.key.unPress(event.code);
  }
}

