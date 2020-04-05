export default class {
  saveLanguageHistory () {
    localStorage.setItem('virtualKeyboardLanguage', 'eng');
  }

  loadLanguageHistory () {
    let response = localStorage.getItem('virtualKeyboardLanguage');

    if (!response) {
      response = 'eng';
      this.saveLanguageHistory();
    }

    return response;
  }
}