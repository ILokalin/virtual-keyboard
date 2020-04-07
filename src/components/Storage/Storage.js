export default class {
  saveLanguageHistory (language) {
    localStorage.setItem('virtualKeyboardLanguage', language);
  }

  loadLanguageHistory () {
    let response = localStorage.getItem('virtualKeyboardLanguage');

    if (!response || (response !== 'ru' && response !== 'eng')) {
      response = 'eng';
      this.saveLanguageHistory(response);
    }

    return response;
  }
}