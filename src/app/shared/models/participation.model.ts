export class Participation {
    constructor(
        public userId: string,
        public street: string,
        public number: string,
        public zipCode: number,
        public city: string,
        public box?: string,
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
