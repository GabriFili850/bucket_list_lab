const PubSub = require('../helpers/pub_sub.js');

const ItemView = function (container) {
  this.container = container;
}

ItemView.prototype.render = function (item) {
  const listItem = document.createElement('li');
  listItem.id = 'bucket-list-item'
  listItem.textContent = item.name;
  const checkbox = this.createCheckbox();
  listItem.appendChild(checkbox);

  const deleteButton = this.createDeleteButton(item._id);
  listItem.appendChild(deleteButton);
  return listItem;
};

ItemView.prototype.createCheckbox = function () {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  return checkbox;
};

ItemView.prototype.createDeleteButton = function (itemID) {
  const button = document.createElement('button');
  button.value = itemID;
  button.innerHTML = 'Delete';
  button.addEventListener('click', (event) => {
    PubSub.publish('ItemView:delete-item-clicked', event.target.value)
  });
  return button
};

module.exports = ItemView;
