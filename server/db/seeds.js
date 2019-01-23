use bucket_list;
db.dropDatabase();

db.items.insertMany([
  {
    name: "Bungie Jump"
  },
  {
    name: "Skydiving"
  },
  {
    name: "Drive Mclaren round race track"
  }
]);
