const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

const router = express.Router();

// index
router.get('/', (req, res) => {
  collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch ((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err})
    });
});

// create
router.post('/', (req, res) =>{
  const newData = req.body;
  collection
  .insertOne(newData)
  .then(() => collection.find().toArray())
  .then((docs) => res.json(docs));
});

return router;

};


module.exports = createRouter;
