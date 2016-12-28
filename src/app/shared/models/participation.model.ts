import { Address } from './address.model';

export class Participation {
    userId: string;
    attendings: Attending[];
    address: Address;
    additionalInformation: string;
}

export class Attending {
    eventId: string;
    isAttending: boolean;
}
