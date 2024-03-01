export enum BloodType {
    A_POSITIVE = "A+",
    A_NEGATIVE = "A-",
    B_POSITIVE = "B+",
    B_NEGATIVE = "B-",
    O_POSITIVE = "O+",
    O_NEGATIVE = "O-",
    AB_POSITIVE = "AB+",
    AB_NEGATIVE = "AB-",
  }
  
  export enum Relationship {
    FAMILY = "Family",
    FRIEND = "Friend",
    COLLEAGUE = "Colleague",
    OTHER = "Other",
  }

  export interface IPickerContact {
    name: string;
    phone: string;
    relationship: keyof typeof Relationship;
  }

  export interface IPickerEmployment {
    startDate: number;
    endDate?: number;
  }

  export interface IPicker {
    _id: string;
    name: string;
    phone: string;
    emergencyContact: IPickerContact;
    govId: string;
    bloodType: keyof typeof BloodType;
    address: string;
    score: number;
    employment: IPickerEmployment;
  }

  export interface ICreatePickerRequest extends Omit<IPicker, "_id"> {}
