import { Address } from './address.model';

export class Participation {
    constructor(
        public userId: string,
        public address: Address,
        public additionalInformation?: string,
        public attendings?: Attending[]) {

        if (this.attendings == null) {
            this.attendings = new Array<Attending>();
        }
    }
}

export class Attending {
    constructor(
        public eventId: string,
        public isAttending?: boolean) {
    }
}
