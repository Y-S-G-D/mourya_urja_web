import { ISibling } from "./siblings-model";

export interface IPersonalInfo {
  // Personal information
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dob: string;
  age:number;
  bloodGroup: string;
  height: number;
  weight: number;
  complexion: string;
  hobbies: string[];
  aboutMe: string;
  profileImages: string[];
}

export interface IContactInfo {
  phoneNumber: string;
  email: string;
}

export interface IAddress {
  address: string;
  locality: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
}

export interface IAllContactInfo {
  contactInfo: IContactInfo;
  residentialAddr: IAddress;
  permanentAddr: IAddress;
}

export interface IEducationalAndProfessionInfo {
  highestEducation: string;
  otherEductionDetail: string;
  jobType: string;
  designation: string;
  workDetail: string;
  income: number;
}

export interface ICultureAndReligiousInfo {
  religion: string;
  caste: string;
  subCaste: string;
  gotra: string;
  raasi: string;
}

export interface IFamilyInfo {
  fatherName: string;
  fatherOccupation: string;
  motherName: string;
  motherOccupation: string;
  siblings: ISibling[];
  familyType: string;
}



export interface IUser {
  createdBy: string;
  id?: string;
  personalInfo: IPersonalInfo;

  contactInfo: IContactInfo;

  // residential address
  residentialAddr: IAddress;
  permanentAddr: IAddress;
  // Educational and professional information
  eduAndProfInfo: IEducationalAndProfessionInfo;
  // Culture and religious information
  cultureAndReligiousInfo: ICultureAndReligiousInfo;
  // Family information
  familyInfo: IFamilyInfo;

  spouseExpectation: string;

  isApproved: boolean;

  tags: string[];
  password: string;
}
