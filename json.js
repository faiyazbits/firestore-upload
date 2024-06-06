const { Firestore } = require('@google-cloud/firestore');
const batchSize = 200;
console.time('program');
const json = require('./json/Event_extractCANCELLED.json');

console.log("total objects", json.length);
const collectionName = "event";

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

const firebaseBetaConfig = {
    apiKey: "AIzaSyClizkPE_3YHlTL_TO6vaKvqbN-xSGL-Cs",
    authDomain: "artemis-beta-6851a.firebaseapp.com",
    databaseURL: "https://artemis-beta-6851a-default-rtdb.firebaseio.com",
    projectId: "artemis-beta-6851a",
    storageBucket: "artemis-beta-6851a.appspot.com",
    messagingSenderId: "470140302404",
    appId: "1:470140302404:web:48a966ad5bf85794e7b811"
  };


const firestore = new Firestore({
    projectId: firebaseConfig.projectId,
    keyFilename: "./artemis-data-collection-prod-firebase-adminsdk-d8ba1-89ec3e6088.json",
    ignoreUndefinedProperties: true
});

function processRows() {
    const batches = [];
    let currentBatch = [];

    json.forEach((document) => {
        currentBatch.push(document);

        if (currentBatch.length === batchSize) {
            batches.push(currentBatch);
            console.log(`${batches.length} batches added`);
            currentBatch = [];
        }
    });

    if (currentBatch.length > 0) {
        batches.push(currentBatch);
    }

    const batchefns = batches.map((batch, i) => saveBatch(collectionName, batch, i));

    return sequentialExecution(batchefns)
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

processRows().then(() => {
    console.log('All batches executed sequentially');
    console.timeEnd('program');
});