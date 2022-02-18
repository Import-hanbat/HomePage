const mongoClient = require('mongodb').MongoClient;
const mongoDbUrl = 'mongodb+srv://import:import1015@cluster0.a1cx0.mongodb.net/HomePage?retryWrites=true&w=majority';
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