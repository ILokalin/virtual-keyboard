import Key from 'Components/Key';
const KEYBOARD_LAYOUT = require('./keyboard-layout.json');

/* Props
  {
    displayOutput: display.outputKey,
    focusToDispaly: display.focus,
    saveLanguage: storage.saveLanguageHistory,
    infoPanelLed: infoPanel.led,
    lang 
    }
*/

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

    this.isChangeLanguageProcess = false;

    this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);

    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('keyboard');

    this.keyDownControl = this.keyDownControl.bind(this);
    this.keyUpControl = this.keyUpControl.bind(this);
    this.whatTheNeedTypeNow = this.whatTheNeedTypeNow.bind(this);

    this.key = new Key({
      endEventKey: propsObject.focusToDispaly,
      loadLayout: this.whatTheNeedTypeNow,
      language: this.state.language,
      capsLock: this.state.capsLock,
      shift: this.state.shift
      });

    KEYBOARD_LAYOUT.forEach(keyboardLine => {
      const line = document.createElement('div');
      line.classList.add('keyboard__line');

      keyboardLine.forEach(keyObject => {
        line.append(this.key.createKey(keyObject));
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
      this.key.changeLayout();
    }

    if (shift) {
      const previusShiftState = this.state.shift;
      this.state.shift = value;

      if (previusShiftState !== value) {
        if (!this.state.alt) {
          this.key.changeLayout();
        }
      }
    }

    if (control) {
      this.state.control = value;
    }

    if (alt) {
      this.state.alt = value;
    }

    if (language) {
      if (!this.isChangeLanguageProcess) {
        this.state.language = this.state.language === 'eng' ? 'ru' : 'eng';
        this.propsObject.infoPanelLed(this.state.capsLock, this.state.language);
        this.propsObject.saveLanguage(this.state.language);
        this.key.changeLayout();

        this.isChangeLanguageProcess = true;
      }

    }
  }

  keyDownControl(event) {
    this.propsObject.focusToDispaly();

    const {key, code, isTrusted} = event;
    let isContinue = true;
    
    if(isTrusted) {
      this.key.press(event.code);
    }

    const controlKeyWorker = {
      CapsLock: () => {
        this.setState({capsLock: true});
        isContinue = false;
      },
      AltLeft: () => {
        if (event.shiftKey || this.state.shift) {
          this.setState({language: true});
          event.preventDefault();
        }
        this.setState({alt: true, value: true});
        isContinue = false;
      },
      AltRight: () => {
        controlKeyWorker.AltLeft();
      },
      ShiftLeft: () => {
        if (event.altKey || this.state.alt) {
          this.setState({language: true});
          event.preventDefault()
        }
        this.setState({shift: true, value: true});
        isContinue = false;
      },
      ShiftRight: () => {
        controlKeyWorker.ShiftLeft()
      },
      ControlLeft: () => {
        this.setState({control: true, value: true});
        isContinue = false;
      },
      ControlRight: () => {
        controlKeyWorker.ControlLeft();
      },
      KeyX: () => {
        if (this.state.control) {
          const commandKeyObject = {
            control: true,
            code: 'Cute'
          }
          this.propsObject.displayOutput(commandKeyObject);
          event.preventDefault();

          isContinue = false;
        }
      },
      KeyC: () => {
        if (this.state.control) {
          const commandKeyObject = {
            control: true,
            code: 'Copy'
          }
          this.propsObject.displayOutput(commandKeyObject);
          event.preventDefault();

          isContinue = false;
        }
      },
      KeyV: () => {
        if (this.state.control) {
          const commandKeyObject = {
            control: true,
            code: 'Paste'
          }
          this.propsObject.displayOutput(commandKeyObject);
          event.preventDefault();

          isContinue = false;
        }
      },
      Lang: () => {
        this.setState({language: true});
        isContinue = false;
        this.isChangeLanguageProcess = false;
      }
    }

    if (code in controlKeyWorker) {
      controlKeyWorker[code]();
    }

    if (!isTrusted && isContinue) {
      const pressedKeyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === event.code);
      const displayObject = {code}

      if (!pressedKeyObject.control) {
        const languagePack = pressedKeyObject[this.state.language] ? pressedKeyObject[this.state.language] : pressedKeyObject['eng'];

        const virtualKey = (this.state.shift || this.state.capsLock) ? languagePack.shiftKey : languagePack.key;

        displayObject.key = virtualKey;
      } 

      displayObject.control = pressedKeyObject.control;
      this.propsObject.displayOutput(displayObject);
    } 

    if (isTrusted && isContinue) {
      if (code === 'Tab') {
        const displayObject = {
          control: true,
          code
        }
        this.propsObject.displayOutput(displayObject);
      }

      const layoutNow = this.whatTheNeedTypeNow(code)
      if (layoutNow.isFindOk && !layoutNow.control) {
        if (!event.ctrlKey && !event.altKey) {
          event.preventDefault();
          const displayObject = {
            control: false,
            key: layoutNow.key,
            code
          }
          this.propsObject.displayOutput(displayObject);
        }
      }
    }
  }

  keyUpControl(event) {
    const {key, code, isTrusted} = event;

    if (code === 'AltLeft' || code === 'AltRight') {
      this.setState({alt: true, value: false});
      this.isChangeLanguageProcess = false;
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      this.setState({shift: true, value: false});
      this.isChangeLanguageProcess = false;
    }

    if (code === 'ControlLeft' || code === 'ControlRight') {
      this.setState({control: true, value: false});
    }

    this.key.unPress(event.code);
  }

  whatTheNeedTypeNow(code) {
    let key = '',
        shiftKey = '',
        isFindOk = true;

    const keyObject = KEYBOARD_LAYOUT.flat().find(item => item.code === code);

    if (!keyObject) {
      return {key, shiftKey, isFindOk: false}
    } 

    const {eng, ru, control, ruAll, engOnly, symbol, ruShift, ruSign} = keyObject;
    const {language, capsLock, shift} = this.state;

    const layoutKey = language === 'eng' ? eng : ru,
          altLayoutKey = language === 'eng' ? ru : eng;

    if (control) {
      if (ru && ru.key) {
        key = layoutKey.key;
      } else {
        key = eng.key;
      }
    }

    if (symbol) {
      if (capsLock) {
        key = shift ? layoutKey.key : layoutKey.shiftKey;
        shiftKey = shift ? altLayoutKey.key : altLayoutKey.shiftKey;
      } else {
        key = shift ? layoutKey.shiftKey : layoutKey.key;
        shiftKey = shift ? altLayoutKey.shiftKey : altLayoutKey.key;
      }
    }

    if (ruAll) {
      if (language === 'eng') {
          key = shift ? layoutKey.shiftKey : layoutKey.key;
        if (capsLock) {
          shiftKey = shift ? altLayoutKey.key : altLayoutKey.shiftKey;
        } else {
          shiftKey = shift ? altLayoutKey.shiftKey : altLayoutKey.key;
        }
      } else if (language === 'ru') {
        if (capsLock) {
          key = shift ? layoutKey.key : layoutKey.shiftKey;
          shiftKey = shift ? altLayoutKey.key : altLayoutKey.shiftKey;
        } else {
          key = shift ? layoutKey.shiftKey : layoutKey.key;
          shiftKey = shift ? altLayoutKey.shiftKey : altLayoutKey.key;
        }
      }
    }

    if (ruShift) {
      key = !shift ? layoutKey.key : layoutKey.shiftKey;
      shiftKey = shift ? '' : layoutKey.shiftKey;
    }

    if (ruSign) {
      key = shift ? layoutKey.shiftKey : layoutKey.key;
      shiftKey = !shift ? layoutKey.shiftKey : layoutKey.key;
    }

    if (engOnly) {
      key = shift ? eng.shiftKey : eng.key;
      shiftKey = !shift ? eng.shiftKey : eng.key;
    }

    return {key, shiftKey, isFindOk, control}
  }
}
