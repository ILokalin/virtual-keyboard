import './app.scss';
require.context("Src/images/", true, /\.(png|svg|jpg|gif)$/);

import Display from 'Components/Display';
import InfoPanel from 'Components/Info-panel';
import Keyboard from 'Components/Keyboard';
import Storage from 'Components/Storage';

const storage = new Storage();
const display = new Display();
const infoPanel = new InfoPanel();

const keyboard = new Keyboard({
  displayOutput: display.outputKey,
  focusToDispaly: display.focus,
  saveLanguage: storage.saveLanguageHistory,
  infoPanelLed: infoPanel.led,
  lang: storage.loadLanguageHistory()
  });

const body = document.querySelector('body');
const container = document.createElement('div');
body.classList.add('page');
container.classList.add('page__container');
body.append(container);



display.insert(container);
infoPanel.insert(container);
keyboard.insert(container);
display.focus();
