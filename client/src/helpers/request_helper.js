const RequestHelper = function (url) {
  this.url = url;
}

RequestHelper.prototype.get = function () {
  return fetch(this.url)
    .then((response) => response.json());
};

RequestHelper.prototype.post = function (item) {
  return fetch(this.url, {
    method: 'POST',
    body: JSON.stringify(item),
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json());
};

module.exports = RequestHelper;
