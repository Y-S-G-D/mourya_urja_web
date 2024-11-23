import { ISibling } from "@/models/siblings-model";
import {
  IAddress,
  IContactInfo,
  ICultureAndReligiousInfo,
  IEducationalAndProfessionInfo,
  IFamilyInfo,
  IPersonalInfo,
  IUser,
} from "@/models/user-model";
import { create } from "zustand";

export interface IUserStore {
  user: IUser | null;
  siblings: ISibling[];
  profileImageFiles: File[];
  addProfileImageFiles: (files: File[]) => void;
  removeProfileImageFile: (index: number) => void;


  addPersonalInfo: (personalInfo: IPersonalInfo) => void;
  addContactInfo: (contactInfo: IContactInfo) => void;
  addResidentialAddr: (residentialAddr: IAddress) => void;
  addPermanentAddr: (permanentAddr: IAddress) => void;
  addEduAndProfInfo: (eduAndProfInfo: IEducationalAndProfessionInfo) => void;
  addCultureAndReligiousInfo: (
    cultureAndReligiousInfo: ICultureAndReligiousInfo
  ) => void;
  addFamilyInfo: (familyInfo: IFamilyInfo) => void;
}

/**
 * A Zustand store for managing user data.
 *
 * @typedef {Object} IUserStore
 * @property {Array<ISibling>} siblings - List of siblings.
 * @property {Array<File>} profileImageFiles - List of profile image files.
 * @property {Object} user - User information.
 * @property {Object} user.personalInfo - Personal information of the user.
 * @property {string} user.personalInfo.firstName - First name of the user.
 * @property {string} user.personalInfo.middleName - Middle name of the user.
 * @property {string} user.personalInfo.lastName - Last name of the user.
 * @property {string} user.personalInfo.gender - Gender of the user.
 * @property {string} user.personalInfo.dob - Date of birth of the user.
 * @property {string} user.personalInfo.bloodGroup - Blood group of the user.
 * @property {number} user.personalInfo.height - Height of the user.
 * @property {number} user.personalInfo.weight - Weight of the user.
 * @property {string} user.personalInfo.complexion - Complexion of the user.
 * @property {Array<string>} user.personalInfo.hobbies - Hobbies of the user.
 * @property {string} user.personalInfo.aboutMe - About me section of the user.
 * @property {Array<string>} user.personalInfo.profileImages - Profile images of the user.
 * @property {Object} user.contactInfo - Contact information of the user.
 * @property {string} user.contactInfo.phoneNumber - Phone number of the user.
 * @property {string} user.contactInfo.email - Email address of the user.
 * @property {Object} user.residentialAddr - Residential address of the user.
 * @property {string} user.residentialAddr.address - Address line of the residential address.
 * @property {string} user.residentialAddr.locality - Locality of the residential address.
 * @property {string} user.residentialAddr.city - City of the residential address.
 * @property {string} user.residentialAddr.district - District of the residential address.
 * @property {string} user.residentialAddr.state - State of the residential address.
 * @property {string} user.residentialAddr.pincode - Pincode of the residential address.
 * @property {Object} user.permanentAddr - Permanent address of the user.
 * @property {string} user.permanentAddr.address - Address line of the permanent address.
 * @property {string} user.permanentAddr.locality - Locality of the permanent address.
 * @property {string} user.permanentAddr.city - City of the permanent address.
 * @property {string} user.permanentAddr.district - District of the permanent address.
 * @property {string} user.permanentAddr.state - State of the permanent address.
 * @property {string} user.permanentAddr.pincode - Pincode of the permanent address.
 * @property {Object} user.eduAndProfInfo - Educational and professional information of the user.
 * @property {string} user.eduAndProfInfo.highestEducation - Highest education of the user.
 * @property {string} user.eduAndProfInfo.otherEductionDetail - Other education details of the user.
 * @property {string} user.eduAndProfInfo.jobType - Job type of the user.
 * @property {string} user.eduAndProfInfo.designation - Designation of the user.
 * @property {string} user.eduAndProfInfo.workDetail - Work details of the user.
 * @property {number} user.eduAndProfInfo.income - Income of the user.
 * @property {Object} user.cultureAndReligiousInfo - Cultural and religious information of the user.
 * @property {string} user.cultureAndReligiousInfo.religion - Religion of the user.
 * @property {string} user.cultureAndReligiousInfo.caste - Caste of the user.
 * @property {string} user.cultureAndReligiousInfo.subCaste - Sub-caste of the user.
 * @property {string} user.cultureAndReligiousInfo.gotra - Gotra of the user.
 * @property {string} user.cultureAndReligiousInfo.raasi - Raasi of the user.
 * @property {Object} user.familyInfo - Family information of the user.
 * @property {string} user.familyInfo.fatherName - Father's name of the user.
 * @property {string} user.familyInfo.fatherOccupation - Father's occupation of the user.
 * @property {string} user.familyInfo.motherName - Mother's name of the user.
 * @property {string} user.familyInfo.motherOccupation - Mother's occupation of the user.
 * @property {Array<Object>} user.familyInfo.siblings - Siblings of the user.
 * @property {string} user.familyInfo.siblings.name - Name of the sibling.
 * @property {string} user.familyInfo.siblings.realation - Relation of the sibling.
 * @property {number} user.familyInfo.siblings.age - Age of the sibling.
 * @property {string} user.familyInfo.siblings.ageRelation - Age relation of the sibling.
 * @property {string} user.familyInfo.siblings.educationDetail - Education details of the sibling.
 * @property {string} user.familyInfo.siblings.workDetails - Work details of the sibling.
 * @property {string} user.familyInfo.familyType - Family type of the user.
 * @property {string} user.spouseExpctation - Spouse expectation of the user.
 * @property {boolean} user.isApproved - Approval status of the user.
 * @property {Array<string>} user.tags - Tags associated with the user.
 *
 * @function addPersonalInfo - Adds personal information to the user.
 * @param {Object} personalInfo - Personal information to be added.
 *
 * @function addContactInfo - Adds contact information to the user.
 * @param {Object} contactInfo - Contact information to be added.
 *
 * @function addResidentialAddr - Adds residential address to the user.
 * @param {Object} residentialAddr - Residential address to be added.
 *
 * @function addPermanentAddr - Adds permanent address to the user.
 * @param {Object} permanentAddr - Permanent address to be added.
 *
 * @function addEduAndProfInfo - Adds educational and professional information to the user.
 * @param {Object} eduAndProfInfo - Educational and professional information to be added.
 *
 * @function addCultureAndReligiousInfo - Adds cultural and religious information to the user.
 * @param {Object} cultureAndReligiousInfo - Cultural and religious information to be added.
 *
 * @function addFamilyInfo - Adds family information to the user.
 * @param {Object} familyInfo - Family information to be added.
 *
 * @function addSibling - Adds a sibling to the list of siblings.
 * @param {ISibling} sibling - Sibling to be added.
 */
const useUserStore = create<IUserStore>((set) => ({
  siblings: [],
  profileImageFiles: [],

  user: {
    createdBy: "",
    personalInfo: {
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dob: "",
      bloodGroup: "",
      height: 0,
      weight: 0,
      complexion: "",
      hobbies: [""],
      aboutMe: "",
      profileImages: [""],
    },
    contactInfo: {
      phoneNumber: "",
      email: "",
    },
    residentialAddr: {
      address: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    permanentAddr: {
      address: "",
      locality: "",
      city: "",
      district: "",
      state: "",
      pincode: "",
    },
    eduAndProfInfo: {
      highestEducation: "",
      otherEductionDetail: "",
      jobType: "",
      designation: "",
      workDetail: "",
      income: 0,
    },
    cultureAndReligiousInfo: {
      religion: "",
      caste: "",
      subCaste: "",
      gotra: "",
      raasi: "",
    },
    familyInfo: {
      fatherName: "",
      fatherOccupation: "",
      motherName: "",
      motherOccupation: "",
      siblings: [
        {
          name: "",
          realation: "",
          age: 0,
          ageRelation: "",
          educationDetail: "",
          workDetails: "",
        },
      ],
      familyType: "",
    },
    spouseExpctation: "",
    isApproved: false,
    tags: [""],
  },
  addPersonalInfo: (personalInfo) => {
    /// add person info in user.personalInfo = personalInfo
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            personalInfo,
          }
        : null,
    }));
  },
  addContactInfo: (contactInfo) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            contactInfo,
          }
        : null,
    }));
  },
  addResidentialAddr: (residentialAddr) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            residentialAddr,
          }
        : null,
    }));
  },
  addPermanentAddr: (permanentAddr) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            permanentAddr,
          }
        : null,
    }));
  },
  addEduAndProfInfo: (eduAndProfInfo) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            eduAndProfInfo,
          }
        : null,
    }));
  },
  addCultureAndReligiousInfo: (cultureAndReligiousInfo) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            cultureAndReligiousInfo,
          }
        : null,
    }));
  },
  addFamilyInfo: (familyInfo) => {
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            familyInfo,
          }
        : null,
    }));
  },

  addSibling: (sibling: ISibling) => {
    set((state) => ({ siblings: [...state.siblings, sibling] }));
  },

  /// add profile image file
  addProfileImageFiles: (files) => {
    set((state) => ({ profileImageFiles: [...state.profileImageFiles, ...files] }));
  },
    /// remove profile image file
    removeProfileImageFile: (index) => {
    set((state) => ({
      profileImageFiles: state.profileImageFiles.filter((_, i) => i !== index),
    }));
    },
}));

export default useUserStore;
