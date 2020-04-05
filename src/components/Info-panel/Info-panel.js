const CAPS_LOCK = '<p class="panel__caps">Caps Lock<span class="panel__caps-led"></span></p>',
      LANGUAGE  = '<p class="panel__lang">Language<span class="panel__lang-led"></span></p>';

export default class {
  constructor (propsObject) {
    this.propsObject = propsObject;

    this.led = this.led.bind(this);

    this.infoPanel = document.createElement('div');
    this.infoPanel.innerHTML = CAPS_LOCK + LANGUAGE
    this.infoPanel.classList.add('panel');
  }

  insert(parent) {
    parent.append(this.infoPanel);
  }

  led(isCapsLock, language) {
    const capsLockLed = this.infoPanel.querySelector('.panel__caps-led');
    const languageLed = this.infoPanel.querySelector('.panel__lang-led');

    if (isCapsLock) {
      capsLockLed.classList.add('panel__caps-led--active');
    } else {
      capsLockLed.classList.remove('panel__caps--active');
    }

    languageLed.innerText = language;
  }
}