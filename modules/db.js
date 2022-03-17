const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = 'DB_URL';
let mongodb;

function connect(callback){
  mongoClient.connect(mongoDbUrl, (err, db) => {
    if(err) console.log(err);
    mongodb = db.db('HomePage');
    callback();
  });
}

function get(){
  return mongodb;
}

function close(){
  mongodb.close();
}

module.exports = {
  connect,
  get,
  close
};
