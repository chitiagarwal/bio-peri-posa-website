import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CareerInterest {
    areaOfExpertise: string;
    name: string;
    email: string;
    message: string;
}
export interface Inquiry {
    name: string;
    email: string;
    company: string;
    message: string;
    productInterest: string;
    quantity: bigint;
}
export interface backendInterface {
    getAllCareerInterests(): Promise<Array<CareerInterest>>;
    getAllInquiries(): Promise<Array<Inquiry>>;
    submitCareerInterest(interest: CareerInterest): Promise<void>;
    submitInquiry(inquiry: Inquiry): Promise<void>;
}
