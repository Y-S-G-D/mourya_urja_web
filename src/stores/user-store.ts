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
import LocalStorage from "@/utils/local-storage/local-storage";
import { create } from "zustand";
import apiClient from "@/lib/axiosInstance";
import { getUsers, preSignedUrl, registerUser } from "@/shared/endpoints";
import { generate12DigPassword } from "@/utils/services/password-generator";
import { Users } from "@/app/users/columns";

export interface IUserStore {
  /// fields for handling dbresponse
  isProcessing: boolean;
  errorMsg: string;
  successMsg: string;

  isSiblingDialogOpen: boolean;
  user: IUser | null;
  siblings: ISibling[];
  profileImageFiles: File[];
  personalInfo: IPersonalInfo;
  contactInfo: IContactInfo;
  residenceInfo: IAddress;
  permanentInfo: IAddress;
  eduAndProfInfo: IEducationalAndProfessionInfo;
  cultureAndReligiousInfo: ICultureAndReligiousInfo;
  familyInfo: IFamilyInfo;
  spouseExpectation: string;
  handleSiblingDialog: (isOpen: boolean) => void;

  addProfileImageFiles: (files: File[]) => void;
  removeProfileImageFile: (index: number) => void;

  saveAllContactInfo: (
    contactInfo: IContactInfo,
    residenceInfo: IAddress,
    permanentAddr: IAddress
  ) => void;
  addPersonalInfo: (personalInfo: IPersonalInfo) => void;

  addEduAndProfInfo: (eduAndProfInfo: IEducationalAndProfessionInfo) => void;
  addCultureAndReligiousInfo: (
    cultureAndReligiousInfo: ICultureAndReligiousInfo
  ) => void;
  addSibling: (sibling: ISibling) => void;
  deleteSibling: (index: number) => void;
  addFamilyInfo: (familyInfo: IFamilyInfo) => void;
  addSpouseInfo: (spouseInfo: string) => void;

  saveUser: () => void;
  
}



const useUserStore = create<IUserStore>((set, get) => ({
  isProcessing: false,
  errorMsg: "",
  successMsg: "",
  isSiblingDialogOpen: false,
  siblings: [],
  profileImageFiles: [],
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
  residenceInfo: {
    address: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  },
  permanentInfo: {
    address: "",
    locality: "",
    city: "",
    district: "",
    state: "",
    pincode: "",
  },
  eduAndProfInfo: {
    highestEducation: "",
    otherEducation: "",
    jobType: "",
    designation: "",
    workDetails: "",
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
        relation: "",
        age: 0,
        ageRelation: "",
        education: "",
        workDetails: "",
      },
    ],
    familyType: "",
  },
  spouseExpectation: "",
  password: "",

  user: null,
  saveUser: async () => {
    const user: IUser = {
      personalInfo: get().personalInfo,
      contactInfo: get().contactInfo,
      residentialAddr: get().residenceInfo,
      permanentAddr: get().permanentInfo,
      eduAndProfInfo: get().eduAndProfInfo,
      cultureAndReligiousInfo: get().cultureAndReligiousInfo,
      familyInfo: get().familyInfo,
      spouseExpectation: get().spouseExpectation,
      createdBy: LocalStorage.getInstance().getLoginInfo()?._id || "",
      isApproved: false,
      tags: [
        ...get().personalInfo.hobbies,
        get().personalInfo.bloodGroup,
        get().personalInfo.gender,
        get().residenceInfo.city,
        get().cultureAndReligiousInfo.religion,
        get().cultureAndReligiousInfo.caste,
        get().cultureAndReligiousInfo.subCaste,
        get().cultureAndReligiousInfo.gotra,
        get().cultureAndReligiousInfo.raasi,
        get().eduAndProfInfo.highestEducation,
        get().eduAndProfInfo.jobType,
        get().eduAndProfInfo.designation,
        get().familyInfo.familyType,
        get().familyInfo.fatherOccupation,
        get().familyInfo.motherOccupation,

      ],
      password: generate12DigPassword(),
    };
    set({ user: user });

    console.log(user);
    // return;
    // const formData = new FormData();
    // formData.append("data", JSON.stringify(user));

    // get().profileImageFiles.forEach((file) => {
    //   formData.append("files", file);
    // });

    console.log("=-=================================");
    // console.log(formData)
    /// save user to db
    try {
      set({ isProcessing: true });  
      const payLoads = get().profileImageFiles.map((file) => {
        return {
          fileName: `${Date.now()+file.name}`,
          fileType: file.type,
        };
      })     
      const preSignedUrlResponse = await apiClient.post(preSignedUrl, {
        payLoads,
        headers: {
          "Content-Type": "application/json",
        },
       
      });

      const fileNames = payLoads.map((file) => file.fileName);
      const preSignedUrls = preSignedUrlResponse.data.data;
      console.log(fileNames);

      await Promise.all(
        get().profileImageFiles.map((file, index) =>
          fetch(preSignedUrls[index], {
            method: "PUT",
            body: file,
          })
        )
      );

      user.personalInfo.profileImages = fileNames;

      const response = await apiClient.post(registerUser, user);
      console.log(response);
      set({ isProcessing: false, successMsg: response.data.message });
      window.location.reload();
    } catch (e) {
      console.log("Error saving user", e);
      set({ errorMsg: "Failed to save user. Please try again later." });
    }
  },
  handleSiblingDialog: (isOpen) => {
    set({ isSiblingDialogOpen: isOpen });
  },
  addPersonalInfo: (personalInfo) => {
    personalInfo.profileImages = get().profileImageFiles.map((file) =>
      URL.createObjectURL(file)
    );
    set({ personalInfo: personalInfo });
  },
  saveAllContactInfo: (contact, residenceAddr, permanentAddr) => {
    set({
      contactInfo: contact,
      residenceInfo: residenceAddr,
      permanentInfo: permanentAddr,
    });
  },

  addEduAndProfInfo: (eduAndProfInfo) => {
    console.log("EduAndProfInfo Details", eduAndProfInfo);
    eduAndProfInfo.income = parseInt(eduAndProfInfo.income.toString());
    set({ eduAndProfInfo: eduAndProfInfo });
  },
  addCultureAndReligiousInfo: (cultureAndReligiousInfo) => {
    console.log("CultureAndReligiousInfo Details", cultureAndReligiousInfo);
    set({ cultureAndReligiousInfo: cultureAndReligiousInfo });
  },
  addFamilyInfo: (familyInfo) => {
    console.log("FamilyInfo Details", familyInfo);
    set({ familyInfo: familyInfo });
  },

  addSibling: (sibling) => {
    sibling.age = parseInt(sibling.age.toString());
    set((state) => {
      const updatedSiblings = [...state.siblings, sibling];
      console.log("Updated Siblings List", updatedSiblings);
      return { siblings: updatedSiblings };
    });
  },
  deleteSibling: (index) => {
    set((state) => ({
      siblings: state.siblings.filter((_, i) => i !== index),
    }));
  },
  addSpouseInfo(spouseInfo) {
    set({ spouseExpectation: spouseInfo });
  },
  /// add profile image file
  addProfileImageFiles: (files) => {
    if (get().profileImageFiles.length + files.length > 5) {
      throw new Error("You can only add up to 5 profile images");
    }
    /// check image size
    set((state) => ({
      profileImageFiles: [...state.profileImageFiles, ...files],
    }));
  },
  /// remove profile image file
  removeProfileImageFile: (index) => {
    set((state) => ({
      profileImageFiles: state.profileImageFiles.filter((_, i) => i !== index),
    }));
  },
}));

export default useUserStore;
// +++++++++++++++++++++============================================================== ///

export  interface IFetchUserStore {
  isProcessing: boolean;
  errorMsg: string;
  users: IUser[];
  getUsers: () => Promise<IUser[]>;
  getUserTableData: ( users: IUser[] ) => Users[]
}

export const useFetchUserStore = create<IFetchUserStore>((set) => ({
  isProcessing: false,
  errorMsg: "",
  users: [],
  getUsers: async () => {
    try {
      set({ isProcessing: true });
      const response = await apiClient.get(getUsers,{
        params:{
          limit:10,
          skip:1
        }
      });
      console.log(response);
      if(response.status === 200){
        const fetchedUsers: IUser[] = response.data.data;
        set({users: fetchedUsers ,isProcessing:false });
        return fetchedUsers;
      }
      return [];
    } catch (e) {
      console.log("Error fetching users", e);
      set({ errorMsg: "Failed to get users. Please try again later." });
      return [];
    }
  },
  getUserTableData: (users: IUser[]): Users[] => {
    // Implement the logic to convert IUser[] to Users[]
    return users.map((user, index) => ({
      id: (index + 1).toString(),
      name: `${user.personalInfo.firstName} ${user.personalInfo.lastName}`,
      email: user.contactInfo.email,
      dob: user.personalInfo.dob,
      phoneNumber: user.contactInfo.phoneNumber,
      jobType: user.eduAndProfInfo.jobType,
    }));
  }
    
}));