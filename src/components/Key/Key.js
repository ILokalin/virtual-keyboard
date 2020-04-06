/* Props
  {
    endEventKey: propsObject.focusToDispaly,
    language: this.state.language,
    loadLayout: this.whatTheNeedTypeNow,
    capsLock: this.state.capsLock,
    shift: 
  }*/

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
    const key = this.keyList.find(element => element.code === code);

    if (key) {
      key.classList.add('key--pressed');
    }
  }

  unPress(code) {
    const key = this.keyList.find(element => element.code === code);

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
         code: targetKey.code
      }
      const myDownEvent = new KeyboardEvent('keydown', pressedKeyOptions);
      document.dispatchEvent(myDownEvent);
    }
  }

  handleKeyUp(event) {
    const target = event.target,
          targetKey = target.closest('.key');
    
    if (targetKey) {
      const pressedKeyOptions = {
         bubbles: true,
         code: targetKey.code
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
    elementDomKey.code = code;

    elementDomKey.innerHTML = '<span class="key__name"></span>';
    elementDomKey.innerHTML += '<span class="key__up"></span>';

    if (control) {
      elementDomKey.control = true;
      elementDomKey.classList.add(`key--${code.toLowerCase()}`, 'key--control');
    }

    elementDomKey.addEventListener('mousedown', this.handleKeyDown)
    elementDomKey.addEventListener('mouseup', this.handleKeyUp)

    this.keyList.push(elementDomKey);
    this.setKeyLayout(elementDomKey);
    return elementDomKey;
  }

  changeLayout() {
    this.keyList .forEach(key => {
      this.setKeyLayout(key);
    })
  }

  setKeyLayout(elementKey) {
    const basicKeySign = elementKey.querySelector('.key__name'),
          altKeySign = elementKey.querySelector('.key__up');

    const whatLayoutNow = this.propsObject.loadLayout(elementKey.code);
    basicKeySign.innerHTML = whatLayoutNow.key;
    altKeySign.innerHTML = whatLayoutNow.shiftKey;
  }
}