export class Address {
    constructor(
        public street: string,
        public number: string,
        public zipCode: number,
        public city: string,
        public box?: string) { }
}
