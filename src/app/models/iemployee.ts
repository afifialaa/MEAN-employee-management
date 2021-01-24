export interface Iemployee {
    firstName:string;
    lastName:string;
    email:string;
    gender:string;
    phoneNumber: string;
    jobTitle:string;
    department?: string;
    university?: string;

    country: string;
    city?: string;
    street?: string;

    hiringDate?: Date;
    terminatingDate?: Date;
    bank?: string;
    bankAccount?: string;
    salary?:number;
}
