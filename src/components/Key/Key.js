export default class {
  constructor () {
    console.log('i am ok')
    this.keyList = [];
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

    this.keyList.push(elementDomKey);
    return elementDomKey;
  }
}