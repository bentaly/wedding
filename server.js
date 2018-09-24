const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionStr =
  'mongodb+srv://bental:shruWickfejeeg6@cluster0-sd7er.mongodb.net/wedding';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
  const obj = {
    something: 1,
    else: 'test'
  };
  return res.send(obj);
});

app.get('/read', function(req, res) {
  MongoClient.connect(
    connectionStr,
    function(err, db) {
      const database = db.db('guests');
      database
        .collection('people')
        .find({})
        .toArray((error, docs) => {
          if (err) {
            return res.send(err);
          } else {
            return res.send(docs);
          }
        });
    }
  );
});

app.get('/insert', function(req, res) {
  MongoClient.connect(
    connectionStr,
    function(err, client) {
      const database = client.db('guests');

      database.createCollection('people', function(error, collection) {
        const obj = {
          name: 'Migo',
          diet: 'vegano'
        };

        collection.insertOne(obj);
        return res.send('cool');
      });
    }
  );
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
connectDb();

function connectDb() {
  MongoClient.connect(
    connectionStr,
    function(err, client) {
      // const collection = client.db('test').collection('devices');
      // perform actions on the collection object
      if (client) {
        console.log('Connected!');
      } else {
        console.log('err');
        console.log(err);
      }
      client.close();
    }
  );
}
