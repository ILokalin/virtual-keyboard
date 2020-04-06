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

    if (control) {
      this.state.control = value;
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
  }

  keyDownControl(event) {
    this.propsObject.focusToDispaly();

    const {key, code, isTrusted} = event;
    let isContinue = true;

    if (code === 'CapsLock') {
      this.setState({capsLock: true});
      isContinue = false;
    }

    if (code === 'AltLeft' || code === 'AltRight') {
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

    if (code === 'ControlLeft' || code === 'ControlRight') {
      this.setState({control: true, value: true});
      isContinue = false;
    }

    if (code === 'KeyX' && this.state.control) {
      const commandKeyObject = {
        control: true,
        code: 'Cute'
      }
      this.propsObject.displayOutput(commandKeyObject);
      isContinue = false;
    }

    if (code === 'KeyC' && this.state.control) {
      const commandKeyObject = {
        control: true,
        code: 'Copy'
      }
      this.propsObject.displayOutput(commandKeyObject);
      isContinue = false;
    }

    if (code === 'KeyV' && this.state.control) {
      const commandKeyObject = {
        control: true,
        code: 'Paste'
      }
      this.propsObject.displayOutput(commandKeyObject);
      isContinue = false;
    }

    if (!isTrusted && isContinue) {
      const pressedKeyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === event.code);
      const displayObject = {code}

      if (!pressedKeyObject.control) {
        const languagePack = pressedKeyObject[this.state.language] ? pressedKeyObject[this.state.language] : pressedKeyObject['eng'];

        const virtualKey = (this.state.shift || this.state.capsLock) ? languagePack.shiftKey : languagePack.key;

        displayObject.key = virtualKey
      } 

      displayObject.control = pressedKeyObject.control;
      this.propsObject.displayOutput(displayObject);
    } 

    if(isTrusted) {
      this.key.press(event.code);
    }

    if (isTrusted && isContinue) {
      if (code === 'Tab') {
        const displayObject = {
          control: true,
          code
          }
        this.propsObject.displayOutput(displayObject);
      }

      const pressedKeyPhisical = KEYBOARD_LAYOUT.flat().find(item => item.code === event.code);
      let keyboardLanguage = this.state.language;

      if (pressedKeyPhisical && !pressedKeyPhisical.control) {
        if (key === pressedKeyPhisical.eng.key || key === pressedKeyPhisical.eng.shiftKey) {
          keyboardLanguage = 'eng';
        } else {
          keyboardLanguage = 'ru';
        }

        if (keyboardLanguage !== this.state.language) {
          this.setState({language: true})
        }
      }

      let keyboardCapsLock = this.state.capsLock;
      if (pressedKeyPhisical && !pressedKeyPhisical.control) {
        if (key === pressedKeyPhisical[this.state.language].key) {
          keyboardCapsLock = false;
        } else {
          keyboardCapsLock = true;
        }

        if (keyboardCapsLock !== this.state.capsLock) {
          this.setState({capsLock: true})
        }
      }
    }
  }

  keyUpControl(event) {
    const {key, code, isTrusted} = event;

    if (code === 'AltLeft' || code === 'AltRight') {
      this.setState({alt: true, value: false});
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.setState({shift: true, value: false});
    }

    if (code === 'ControlLeft' || code === 'ControlRight') {
      this.setState({control: true, value: false});
    }

    this.key.unPress(event.code);
  }
}

