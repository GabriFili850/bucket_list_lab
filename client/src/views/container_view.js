const PubSub = require('../helpers/pub_sub.js');
const ItemView = require('./item_view.js');

const ContainerView = function (container) {
  this.container = container;
}

ContainerView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList:data-loaded', (event) => {
    this.render(event.detail);
  })
};

ContainerView.prototype.render = function (list) {
  this.container.innerHTML = '';
  const unorderedList = document.createElement('ul');
  const itemView = new ItemView(unorderedList);
  list.forEach((item) => {
    const listItem = itemView.render(item);
    unorderedList.appendChild(listItem)
  });
  this.container.appendChild(unorderedList);
};

module.exports = ContainerView;
