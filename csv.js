const fs = require('fs');
const path = require('path');
const { Firestore } = require('@google-cloud/firestore');
const csvParse = require('./csvParse');
const readline = require('readline');
const batchSize = 50;
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

const firestore = new Firestore({
  projectId: firebaseConfig.projectId,
  keyFilename: './artemis-data-collection-prod-firebase-adminsdk-d8ba1-89ec3e6088.json',
  ignoreUndefinedProperties: true
});


const keyValueMap = require("./keyValueMaps").interventionPlanLineItemKeyMap
const filePath = path.resolve("json", "InterventionPlanLineItem_extract1.csv");
const collectionName = "interventionPlanLineItem";

const fileStream = fs.createReadStream(filePath);

let headers = null;
let hs = null;

const batches = [];
let currentBatch = [];
let badRows = [];
let l = 0;

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});
rl.on('line', (line) => {
  l++
  if (headers === null) {
    headers = line;
    hs = csvParse(headers, ",")[0]
  }
  if (headers) {
    let data = {};
    try {
      let row = csvParse(line, ",")[0]
      hs.forEach((h, i) => {
        let key = keyValueMap[h].name ? keyValueMap[h].name : keyValueMap[h];
        let type = keyValueMap[h].type;
        let value = format(type, row[i])
        data[key] = value;
      })
      currentBatch.push(data);
      if (currentBatch.length === batchSize) {
        batches.push(currentBatch);
        console.log(`${batches.length} batches added`);
        currentBatch = [];
      }
    } catch (e) {
      badRows.push(line)
    }
  }
});

rl.on('close', () => {
  console.log('File reading completed.');
  console.log(badRows);
  if (currentBatch.length > 0) {
    batches.push(currentBatch);
  }
  console.log("badRows", badRows.length);
  const ids = badRows.map((b) => {
    let row = b.split(",")[0]
    return row;
  })
  console.log(ids.toString());
  const batchefns = batches.map((batch, i) => saveBatch(collectionName, batch, i));
  console.log("No of Batches", batchefns.length);
  const live = batchefns.slice(0,1000);

  const sequencePromise = sequentialExecution(live);

  sequencePromise.then(() => {
    console.log('All batches executed sequentially');
    console.timeEnd('program');
  });
});


function format(key, val) {
  if (val === "") {
    return null;
  }
  if (key === 'bool' && val === 'false') {
    return false;
  }
  if (key === 'bool' && val === 'true') {
    return true;
  }

  if (key === "int") {
    return parseFloat(val);
  }
  return val
}

async function sequentialExecution(arrayOfFunctions) {
  for (let i = 0; i < arrayOfFunctions.length; i++) {
    await delay(1000); // Delay of 1 second
    console.log("executing batch", i + 1);
    await arrayOfFunctions[i](); // Call the function and wait for its promise to resolve
  }
}

// Function to create a delay using a Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function saveBatch(collectionName, documents, batchLength) {
  const batch = firestore.batch();

  documents.forEach((document) => {
    const docRef = firestore.collection(collectionName).doc(document.Id);
    batch.set(docRef, document);
  });

  return function () {
    return batch.commit()
  }
}
