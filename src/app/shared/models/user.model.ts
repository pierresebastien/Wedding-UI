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
    isRegistrationCompleted: boolean;
}

export class FamilyUser extends BaseUser {
    type: number;
}

export class User extends BaseUser {
    family: FamilyUser[];
}
