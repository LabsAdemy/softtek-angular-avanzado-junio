import { TripKind } from './trip-kind.enum';
import { TripStatus } from './trip-status.enum';

export interface Trip {
  id: string | undefined;
  agencyId: string;
  agencyTripCode: string | undefined;
  destination: string;
  startDate: Date;
  endDate: Date;
  flightPrice: number;
  stayingNightPrice: number;
  kind: TripKind;
  status: TripStatus;
  extraLuggagePricePerKilo: number;
  premiumFoodPrice: number;
  places: number;
}
