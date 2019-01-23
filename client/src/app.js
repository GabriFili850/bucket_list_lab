const ContainerView = require('./views/container_view.js');
const FormView = require('./views/form_view.js');
const BucketList = require('./models/bucket_list.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('Javascript Loaded');

  const bucketEntryForm = document.querySelector('form#bucket-list-form')
  const formView = new FormView(bucketEntryForm);
  formView.bindEvents();

  const bucketList = new BucketList();
  bucketList.bindEvents();
})
