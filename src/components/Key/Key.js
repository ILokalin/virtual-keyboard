export default class {
  constructor () {
    console.log('i am ok')
    this.keyList = [];
  }

  createKey(keyObject, lang) {
    const {code, control = false, eng = {}, ru = {}} = keyObject;
    const layoutKey = keyObject[lang];

    let elementDomKey = document.createElement('div');
    elementDomKey.innerHTML = `<span class="key__name">${layoutKey.key}</span>`
    elementDomKey.innerHTML += `<span class="key__up">${!control ? layoutKey.shiftKey : ''}</span>`;

    elementDomKey.classList.add('key');
    if (control) {
      elementDomKey.control = true;
      elementDomKey.classList.add(`key--${eng.key.toLowerCase()}`);
    }

    elementDomKey.eng = eng;
    elementDomKey.ru = ru;

    this.keyList.push(elementDomKey);
    return elementDomKey;
  }
}