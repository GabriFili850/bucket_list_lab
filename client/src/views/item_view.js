const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
}

ItemView.prototype.render = function (item) {
  const listItem = document.createElement('li');
  listItem.id = 'bucket-list-item'
  listItem.textContent = item.name;
  const checkbox = this.createCheckbox();
  const text = createDeleteButton()
  listItem.appendChild(checkbox);
  listItem.appendChild(text);
  return listItem;
};

ItemView.prototype.createCheckbox = function () {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  return checkbox;
};

ItemView.prototype.createDeleteButton = function () {
  const text = document.createTextNode("\u00D7");
  return text
};

module.exports = ItemView;
