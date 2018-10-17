const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const connectionStr =
  'mongodb+srv://bental:Taly21Mdb!@cluster0-sd7er.mongodb.net/wedding';
const ObjectID = require('mongodb').ObjectID;

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser());

// call /guests?like=ea for leah
// call /guests?group=1 for group 1, duh
app.get('/guests', (req, res) => {
  const { like, group } = req.query;
  let filter = {};

  if (like) {
    filter = { name: new RegExp(like, 'i') };
  } else if (group) {
    filter = { group: parseInt(group, 10) };
  }

  MongoClient.connect(
    connectionStr,
    (err, db) => {
      const database = db.db('guests');
      database
        .collection('people')
        .find(filter)
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

app.post('/update-guests', (req, res) => {
  MongoClient.connect(
    connectionStr,
    (err, db) => {
      if (err) {
        res.send(err);
      }
      const database = db.db('guests');
      for (const guest of req.body) {
        if (guest.new) {
          delete guest._id;
          database.collection('people').insertOne(guest);
        } else {
          database.collection('people').updateOne(
            { _id: ObjectID(guest._id) },
            { $set: getUserWithoutId(guest) },
            {
              upsert: true
            }
          );
        }
      }

      res.send(200);
    }
  );
});

const getUserWithoutId = user => {
  delete user._id;
  return user;
};
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
