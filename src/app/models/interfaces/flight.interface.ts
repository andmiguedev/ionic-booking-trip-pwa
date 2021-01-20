export interface Flight {
  flightId?: string;
  airline: string;
  duration: string;
  departureTime: string;
  arrivalTime: string;
  originCode: string;
  destinationCode: string;
  layover: string;
  aircraft: string;
  purchaseClass: string;
  companyLogo: string;
  ticketPrice: number;
  labelTicket?: string;
}
