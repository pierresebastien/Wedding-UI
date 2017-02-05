import { Address } from './address.model';

export abstract class BaseUser {
    id: string;
    firstName: string;
    lastName: string;
    additionnalInfos: string;
    street: string;
    number: string;
    box: string;
    zipCode: number;
    city: string;

    public static getAddress(user: BaseUser): Address {
        return new Address(user.street, user.number, user.zipCode, user.city, user.box);
    }
}

export class FamilyUser extends BaseUser {
    type: number;
}

export class User extends BaseUser {
    family: FamilyUser[];
}
