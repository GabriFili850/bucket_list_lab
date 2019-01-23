const PubSub = require('../helpers/pub_sub.js');

const FormView = function (formElement) {
  this.form = formElement;
}

FormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (event) => {
    this.handleFormSubmit(event);
  })
};

FormView.prototype.handleFormSubmit = function (form) {
  event.preventDefault();
  const newListItem = this.createItem(event.target);
  PubSub.publish('FormView:bucket-list-item-submitted', newListItem);
  event.target.reset();
};

FormView.prototype.createItem = function (form) {
  const newBucketList = {
    name: form.bucketList.value
  }
  return newBucketList
};

module.exports = FormView;
