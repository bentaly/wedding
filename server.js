const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionStr =
  'mongodb+srv://bental:Taly21Mdb!@cluster0-sd7er.mongodb.net/wedding';

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
  const obj = {
    something: 1,
    else: 'test'
  };
  return res.send(obj);
});

// call /guests?like=ea foe leah
app.get('/guests', function(req, res) {
  const { like } = req.query;
  MongoClient.connect(
    connectionStr,
    function(err, db) {
      const database = db.db('guests');
      database
        .collection('people')
        .find({ name: new RegExp(like, 'i') })
        .toArray((error, docs) => {
          if (err || error) {
            return res.send(err || error);
          } else {
            return res.send(docs);
          }
        });
    }
  );
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
          if (err || error) {
            return res.send(err || error);
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
        if (err || error) {
          return res.send(err || error);
        } else {
          const obj = {
            name: 'Migo',
            diet: 'vegano'
          };

          collection.insertOne(obj);
          return res.send('cool');
        }
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
