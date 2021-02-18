import { FLIGHTS, fetchItineraryFlights } from './flights';

const firebase = require('firebase');
require('firebase/firestore');

var firebaseConfig = {
  apiKey: 'AIzaSyCM1iIk-Y48lKx30g610ReB7eJo593lVas',
  authDomain: 'backend-booking-trip-pwa-29e08.firebaseapp.com',
  projectId: 'backend-booking-trip-pwa-29e08',
  storageBucket: 'backend-booking-trip-pwa-29e08.appspot.com',
  messagingSenderId: '511913186889',
  appId: '1:511913186889:web:183529228c1d46710f1198',
  measurementId: 'G-L3NT6Z5FRT',
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

start().then((response) => console.log('Task Complete'));

async function uploadDepartures() {
  const flights = await db.collection('flights');
  // const returns = await onlineDB.collection('returns');

  for (let flight of Object.values(FLIGHTS)) {
    const checkFlight = replaceId(flight);
    const flightRef = await flights.add(checkFlight);

    const departures = await flightRef.collection('departures');
    const departureFlights = fetchItineraryFlights(flight['id']);

    for (const departure of departureFlights) {
      const checkDeparture = replaceId(departure);
      await departures.add(checkDeparture);
    }
  }
}

async function uploadReturns() {
  const flights = await db.collection('flights');
  // const returns = await onlineDB.collection('returns');

  for (let flight of Object.values(FLIGHTS)) {
    const checkFlight = replaceId(flight);
    const flightRef = await flights.add(checkFlight);

    const returns = await flightRef.collection('returns');
    const returnFlights = fetchItineraryFlights(flight['id']);

    for (const arrival of returnFlights) {
      const checkReturn = replaceId(arrival);
      await returns.add(checkReturn);
    }
  }
}

function replaceId(data: any) {
  const newData: any = { ...data };
  delete newData.id;
  return newData;
}

async function start() {
  try {
    console.log('Please wait until records are being uploaded...');
    await uploadDepartures();
    await uploadReturns();
    console.log('Uploading flight data to Firebase database...\n');
    await app.delete();
  } catch (e) {
    console.log(
      'Collections could not be uploaded to Firebase, Fix this error: ',
      e,
      'and try again! \n\n'
    );
  }
}
