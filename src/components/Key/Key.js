export default class {
  constructor (propsObject) {
    this.propsObject = propsObject;
    this.keyList = [];

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.press = this.press.bind(this);
    this.unPress = this.unPress.bind(this);
  }

  press(code) {
    const key = this.keyList.find(element => element.options.code === code);

    if (key) {
      key.classList.add('key--pressed');
    }
  }

  unPress(code) {
    const key = this.keyList.find(element => element.options.code === code);

    if (key) {
      key.classList.remove('key--pressed');
    }
  }

  handleKeyDown(event) {
    const target = event.target,
          targetKey = target.closest('.key');
    
    if (targetKey) {
      const pressedKeyOptions = {
         bubbles: true,
         code: targetKey.options.code
      }
      const myDownEvent = new KeyboardEvent('keydown', pressedKeyOptions);
      document.dispatchEvent(myDownEvent);

      setTimeout(() => {this.propsObject.endEventKey()})
    }
  }

    handleKeyUp(event) {
    const target = event.target,
          targetKey = target.closest('.key');
    
    if (targetKey) {
      const pressedKeyOptions = {
         bubbles: true,
         code: targetKey.options.code
      }
      const myUpEvent = new KeyboardEvent('keyup', pressedKeyOptions);
      document.dispatchEvent(myUpEvent);

      setTimeout(() => {this.propsObject.endEventKey()})
    }
  }

  createKey(keyObject) {
    const {code, control} = keyObject;

    let elementDomKey = document.createElement('div');
    elementDomKey.classList.add('key');
    elementDomKey.options = keyObject

    elementDomKey.innerHTML = '<span class="key__name"></span>';
    elementDomKey.innerHTML += '<span class="key__up"></span>';

    if (control) {
      elementDomKey.control = true;
      elementDomKey.classList.add(`key--${code.toLowerCase()}`, 'key--control');
    }

    elementDomKey.addEventListener('mousedown', this.handleKeyDown)
    elementDomKey.addEventListener('mouseup', this.handleKeyUp)

    this.keyList.push(elementDomKey);
    this.setLanguageLayout(elementDomKey);
    return elementDomKey;
  }

  changeLanguage(language) {
    this.propsObject.language = language;

    this.keyList .forEach(key => {
      this.setLanguageLayout(key);
    })
  }

  setLanguageLayout(elementKey) {
    const {eng, ru, control, ruAll, symbol, ruShift, ruSign} = elementKey.options;
    const {language} = this.propsObject;

    const layoutKey = language === 'eng' ? eng : ru,
          altLayoutKey = language === 'eng' ? ru : eng;

    const basicKeySign = elementKey.querySelector('.key__name'),
          altKeySign = elementKey.querySelector('.key__up');

    if (symbol) {
      basicKeySign.innerText = layoutKey.shiftKey;
      altKeySign.innerText = altLayoutKey.shiftKey;

    } else if (ruAll && language === 'eng') {
      basicKeySign.innerText = layoutKey.key;
      altKeySign.innerText = altLayoutKey.shiftKey;

    } else if (ruAll && language === 'ru') {
      basicKeySign.innerText = layoutKey.shiftKey;
      altKeySign.innerText = altLayoutKey.key;

    } else if (control) {
      basicKeySign.innerHTML = eng.key;

    } else if (ruShift) {
      basicKeySign.innerText = eng.key;
      altKeySign.innerText = layoutKey.shiftKey;

    } else if (ruSign) {
      basicKeySign.innerText = layoutKey.key;
      altKeySign.innerText = layoutKey.shiftKey;

    } else {
      basicKeySign.innerText = eng.key;
      altKeySign.innerText = eng.shiftKey;

    }
  }
}