export const FLIGHTS: any = {
  1: {
    id: 1,
    airline: 'Delta Airlines',
    companyLogo: 'assets/images/carriers/delta-logo.jpg',
    flightNo: Math.floor(Math.random() * Math.floor(9999)),
    layover: 'Nonstop',
    aircraft: 'Boeing 737-800',
    purchaseClass: 'Premium Economy',
    ticketPrice: 345,
    labelTicket: 'per person',
  },
  2: {
    id: 2,
    airline: 'Jet Blue',
    companyLogo: 'assets/images/carriers/jetblue-logo.jpg',
    flightNo: Math.floor(Math.random() * Math.floor(9999)),
    layover: 'Nonstop',
    aircraft: 'Airbus A321',
    purchaseClass: 'Business',
    ticketPrice: 340,
    labelTicket: 'per person',
  },
  3: {
    id: 3,
    airline: 'Southwest Airlines',
    companyLogo: 'assets/images/carriers/southwest-logo.jpg',
    flightNo: Math.floor(Math.random() * Math.floor(9999)),
    layover: 'Nonstop',
    aircraft: 'Boeing 737-200',
    purchaseClass: 'Economy/Coach',
    ticketPrice: 360,
    labelTicket: 'per person',
  },
  4: {
    id: 4,
    airline: 'Spirit Airlines',
    companyLogo: 'assets/images/carriers/spirit-logo.jpg',
    flightNo: Math.floor(Math.random() * Math.floor(9999)),
    layover: 'Nonstop',
    aircraft: 'Airbus A320',
    purchaseClass: 'Economy/Coach',
    ticketPrice: 370,
    labelTicket: 'per person',
  },
  5: {
    id: 5,
    airline: 'United Airlines',
    companyLogo: 'assets/images/carriers/continental-logo.jpg',
    flightNo: Math.floor(Math.random() * Math.floor(9999)),
    layover: 'Nonstop',
    aircraft: 'Boeing 737-800',
    purchaseClass: 'Premium Economy',
    ticketPrice: 345,
    labelTicket: 'per person',
  },
};

export const DEPARTURES = {
  1: {
    id: 1,
    originCode: 'FLL',
    departureTime: '10:11 am',
    destinationCode: 'ATL',
    arrivalTime: '11:57 am',
    duration: '2h 56m',
    flightId: 1,
  },
  2: {
    id: 2,
    originCode: 'FLL',
    departureTime: '10:06 am',
    destinationCode: 'JFK',
    arrivalTime: '12:49 pm',
    duration: '2h 43m',
    flightId: 2,
  },
  3: {
    id: 3,
    originCode: 'FLL',
    departureTime: '10:15 am',
    destinationCode: 'MDW',
    arrivalTime: '12:35 pm',
    duration: '3h 20m',
    flightId: 3,
  },
  4: {
    id: 4,
    originCode: 'FLL',
    departureTime: '9:39 am',
    destinationCode: 'DEN',
    arrivalTime: '12:35 pm',
    duration: '3h 38m',
    flightId: 4,
  },
  5: {
    id: 5,
    originCode: 'FLL',
    departureTime: '12:45 pm',
    destinationCode: 'CLE',
    arrivalTime: '3:41 pm',
    duration: '2h 56m',
    flightId: 5,
  },
};

export const RETURNS: any = {
  1: {
    id: 1,
    originCode: 'ATL',
    departureTime: '11:15 am',
    destinationCode: 'FLL',
    arrivalTime: '1:12 pm',
    duration: '1h 58m',
    flightId: 1,
  },
  2: {
    id: 2,
    originCode: 'FLL',
    departureTime: '10:06 am',
    destinationCode: 'JFK',
    arrivalTime: '12:49 pm',
    duration: '3h 25m',
    flightId: 2,
  },
  3: {
    id: 3,
    originCode: 'FLL',
    departureTime: '10:15 am',
    destinationCode: 'MDW',
    arrivalTime: '12:35 pm',
    duration: '2h 39m',
    flightId: 3,
  },
  4: {
    id: 4,
    originCode: 'FLL',
    departureTime: '9:39 am',
    destinationCode: 'DEN',
    arrivalTime: '12:35 pm',
    duration: '3h 30m',
    flightId: 4,
  },
  5: {
    id: 5,
    originCode: 'FLL',
    departureTime: '12:45 pm',
    destinationCode: 'CLE',
    arrivalTime: '3:41 pm',
    duration: '2h 41m',
    flightId: 5,
  },
};

export function fetchFlightById(flightId: number) {
  return FLIGHTS[flightId];
}

export function fetchItineraryFlights(flightId: number) {
  return Object.values(DEPARTURES).filter(
    (departure) => departure.flightId == flightId
  );
}
