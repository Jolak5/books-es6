import {
  showListButton,
  contactInfoSection,
  awesomeBooksSection,
  inputFormSection,
} from './variables.js';
import switchMode from './SwitchMode.js';

const showBooksList = () => {
  switchMode(showListButton);
  awesomeBooksSection.style.display = 'flex';

  contactInfoSection.style.display = 'none';
  inputFormSection.style.display = 'none';
};

export default showBooksList;
