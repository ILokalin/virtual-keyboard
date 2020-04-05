import './app.scss';
import Display from 'Components/Display';
import Keyboard from 'Components/Keyboard';
import Storage from 'Components/Storage';

const storage = new Storage();
const display = new Display();

const keyboard = new Keyboard({
  displayOutput: display.outputKey,
  focusToDispaly: display.focus,
  saveLanguage: storage.saveLanguageHistory,
  lang: storage.loadLanguageHistory()
  });

const body = document.querySelector('body');
const container = document.createElement('div');
body.classList.add('page');
container.classList.add('page__container');
body.append(container);



display.insert(container);
keyboard.insert(container);
display.focus();
