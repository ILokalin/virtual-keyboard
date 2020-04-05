export default class {
  constructor (onClickKey) {
    this.onClickKey = onClickKey;
    this.keyList = [];

    this.handleKey = this.handleKey.bind(this);
    this.press = this.press.bind(this);
    this.unPress = this.unPress.bind(this);
  }

  press(code) {
    const key = this.keyList.find(elemnt => elemnt.code === code);

    if (key) {
      key.classList.add('key--pressed');
    }
  }

  unPress(code) {
    const key = this.keyList.find(elemnt => elemnt.code === code);

    if (key) {
      key.classList.remove('key--pressed');
    }
  }

  handleKey(event) {
    const target = event.target,
          targetKey = target.closest('.key');

    if (targetKey) {
      const {code, eng, ru} = targetKey;
      this.onClickKey({code, eng, ru});
    }
  }

  createKey(keyObject, lang) {
    const {code, symbol = false, ruAll = false, control = false, eng = {}, ru = {}} = keyObject;
    const layoutKey = keyObject[lang];

    let elementDomKey = document.createElement('div');
    if (symbol || ruAll) {
      elementDomKey.innerHTML = `<span class="key__name">${layoutKey.shiftKey}</span>`
      elementDomKey.innerHTML += `<span class="key__up">${!control ? ru.shiftKey : ''}</span>`;
    } else {
      elementDomKey.innerHTML = `<span class="key__name">${layoutKey.key}</span>`
      elementDomKey.innerHTML += `<span class="key__up">${!control ? layoutKey.shiftKey : ''}</span>`;
    }

    elementDomKey.classList.add('key');
    if (control) {
      elementDomKey.control = true;
      elementDomKey.classList.add(`key--${code.toLowerCase()}`, 'key--control');
    }

    elementDomKey.eng = eng;
    elementDomKey.ru = ru;
    elementDomKey.code = code;

    elementDomKey.addEventListener('click', this.handleKey)

    this.keyList.push(elementDomKey);
    return elementDomKey;
  }
}