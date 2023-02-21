import {
  showListButton,
  addNewButton,
  contactInfoButton,
} from './variables.js';

const switchMode = (node) => {
  if (showListButton !== node && showListButton.classList.contains('active')) {
    showListButton.classList.remove('active');
  } else if (
    addNewButton !== node
    && addNewButton.classList.contains('active')
  ) {
    addNewButton.classList.remove('active');
  } else if (
    contactInfoButton !== node
    && contactInfoButton.classList.contains('active')
  ) {
    contactInfoButton.classList.remove('active');
  }
  node.classList.add('active');
};

export default switchMode;
