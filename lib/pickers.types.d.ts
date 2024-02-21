export declare enum BloodType {
    A_POSITIVE = "A+",
    A_NEGATIVE = "A-",
    B_POSITIVE = "B+",
    B_NEGATIVE = "B-",
    O_POSITIVE = "O+",
    O_NEGATIVE = "O-",
    AB_POSITIVE = "AB+",
    AB_NEGATIVE = "AB-"
}
export declare enum Relationship {
    FAMILY = "Family",
    FRIEND = "Friend",
    COLLEAGUE = "Colleague",
    OTHER = "Other"
}
export interface IPickerContact {
    name: string;
    phone: string;
    relationship: Relationship;
}
export interface IPicker {
    id: string;
    name: string;
    phone: string;
    emergencyContact: IPickerContact;
    govId: string;
    bloodType: BloodType;
    address: string;
}
//# sourceMappingURL=pickers.types.d.ts.map