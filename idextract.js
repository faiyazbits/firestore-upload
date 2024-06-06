const fs = require('fs');
const path = require('path');
const { Firestore } = require('@google-cloud/firestore');
const csvParse = require('./csvParse');
const readline = require('readline');
const batchSize = 100;
console.time('program');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWcEIWPleql5SGvxZSsaLBAntATCc5y60",
  authDomain: "artemis-data-collection-prod.firebaseapp.com",
  projectId: "artemis-data-collection-prod",
  storageBucket: "artemis-data-collection-prod.appspot.com",
  messagingSenderId: "168911914082",
  appId: "1:168911914082:web:b1ef02dcbf51bfca337d3b",
  measurementId: "G-ZBNBTSRK0B"
};

const firebaseConfigSanity = {
  apiKey: "AIzaSyDzgFKh7x1T1SZ1uDFyTwJGBF4O_8yi960",
  authDomain: "artemis-dc-internal-sanity.firebaseapp.com",
  projectId: "artemis-dc-internal-sanity",
  storageBucket: "artemis-dc-internal-sanity.appspot.com",
  messagingSenderId: "763583127751",
  appId: "1:763583127751:web:1c5d87be1e5b5e7583dee2",
  measurementId: "G-WEC2QESNWS"
};

const firestore = new Firestore({
  projectId: firebaseConfigSanity.projectId,
  keyFilename: './artemis-dc-internal-sanity-firebase-adminsdk-jee48-8fa75a9e7a.json',
  ignoreUndefinedProperties: true
});


const filePath = path.resolve("json", "outcast.csv");

const fileStream = fs.createReadStream(filePath);

let l = 0;
let bad = [];

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});
rl.on('line', (line) => {
  l++
  if(line[0] === "\""){
    bad.push(line.slice(0,20));
  }
  
});

rl.on('close', () => {
  console.log('File reading completed.');
  console.log("total", l);
  console.log(bad.toString())
});
