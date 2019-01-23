const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BucketList = function () {
  this.url = 'http://localhost:3000/api/bucketlist'
  this.request = new RequestHelper(this.url)
}

BucketList.prototype.bindEvents = function () {
  PubSub.subscribe('FormView:bucket-list-item-submitted', (event) =>{
    this.postItem(event.detail);
  })
};

BucketList.prototype.getData = function () {
  this.request.get()
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', bucketList)
    })
    .catch(console.error);
};

BucketList.prototype.postItem = function (item) {
  this.request.post(item)
    .then((bucketList) => {
      PubSub.publish('BucketList:data-loaded', bucketList)
    })
};
module.exports = BucketList;
