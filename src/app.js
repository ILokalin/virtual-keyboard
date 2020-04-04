import './app.scss';
import Display from 'Components/Display';
import Keyboard from 'Components/Keyboard';

const display = new Display();
const keyboard = new Keyboard();
const body = document.querySelector('body');



display.insert(body);
keyboard.insert(body);
display.focus();
