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
import {
  deleteImage,
  deleteUser,
  getUsers,
  isUserExist,
  preSignedUrl,
  registerUser,
  userByEmail,
} from "@/shared/endpoints";
import { generate12DigPassword } from "@/utils/services/password-generator";
import { Users } from "@/app/users/columns";
import { toast , } from "@/hooks/use-toast";
import { formatDate } from "@/utils/date";

export interface IUserStore {
  /// fields for handling dbresponse
  isProcessing: boolean;
  errorMsg: string;
  successMsg: string;
  activeStep: number;
  handleNext: () => void;
  handleBack: () => void;
  handleReset: () => void;
  isSiblingDialogOpen: boolean;
  user: IUser | null;
  siblings: ISibling[];
  profileImageFiles: File[];
  isPersonalInfoSaved: boolean;
  personalInfo: IPersonalInfo;
  contactInfo: IContactInfo;
  residenceInfo: IAddress;
  permanentInfo: IAddress;
  eduAndProfInfo: IEducationalAndProfessionInfo;
  cultureAndReligiousInfo: ICultureAndReligiousInfo;
  familyInfo: IFamilyInfo;
  spouseExpectation: string;
  isUserExist: boolean;
  checkUserExist: (email: string) => Promise<boolean>;

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
  assignUserData: (user: IUser) => void;
  uploadImages(): Promise<string[]>;
  removeProfileImageFromPersonalInfo: (fileName:string) => void;
}

// const extractFileNameFromURL = (imageUrl: string) => {
//   if(!imageUrl.includes("amazonaws.com")){
//     return imageUrl;
//   }
//   const parsedUrl = new URL(imageUrl);
//   const fileName = parsedUrl.pathname.split("/").pop();
//   return fileName || "";
// }

// Removed incorrect declaration of useUserStore

const useUserStore = create<IUserStore>((set, get) => ({
  activeStep: 0,
  isProcessing: false,
  errorMsg: "",
  successMsg: "",
  isSiblingDialogOpen: false,
  siblings: [],
  profileImageFiles: [],
  isPersonalInfoSaved: false,

  personalInfo: {
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    age: 0,
    bloodGroup: "",
    height: 0,
    weight: 0,
    complexion: "",
    hobbies: [],
    aboutMe: "",
    profileImages: [],
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
  isUserExist: false,

  user: null,
  handleNext: () => {
    set((state) => ({ activeStep: state.activeStep + 1 }));
  },
  handleBack: () => {
    set((state) => ({ activeStep: state.activeStep - 1 }));
  },
  handleReset: () => {
    set({ activeStep: 0 });
  },
  checkUserExist: async (email) => {
    try {
      const response = await apiClient.get(`${isUserExist}/${email}`);
      if (response.status === 200) {
        set({ isUserExist: true });
        return true;
      }
    } catch (e) {
      console.log("Error checking user exist", e);
      return false;
    }
    return false;
  },


  removeProfileImageFromPersonalInfo(fileName) {
 
    set((state) => {
      const updatedProfileImages = state.personalInfo.profileImages.filter((fileN,) => fileN !== fileName);
      return { personalInfo: { ...state.personalInfo, profileImages: updatedProfileImages}}
  });

  },
  uploadImages: async () => {

    // return empty array if no files
    if (get().profileImageFiles.length === 0) {
      return [];
    }

    const payLoads = get().profileImageFiles.map((file) => {
      return {
        fileName: `${Date.now() + file.name}`,
        fileType: file.type,
      };
    });
    const fileNames = payLoads.map((file) => file.fileName);
    const preSignedUrlResponse = await apiClient.post(preSignedUrl, {
      payLoads,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const preSignedUrls = preSignedUrlResponse.data.data;
      await Promise.all(
        get().profileImageFiles.map((file, index) =>
          fetch(preSignedUrls[index], {
            method: "PUT",
            body: file,
          })
        )
      );
      
      return fileNames;

  }
  ,
  saveUser: async () => {
     /// get state of fetch useFetchUserStore 
     const fetchedUsers = useFetchUserStore.getState().user;
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
      isApproved: fetchedUsers?.isApproved ?? false,
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
      password: fetchedUsers?.password ?? generate12DigPassword(),
    };
    set({ user: user });

   
    try {

      set({ isProcessing: true });
    //  const isUserExist = await get().checkUserExist(user.contactInfo.email);
    //   if(isUserExist){
    //     throw new Error("User already Exists with this email");
    //   } 

      // const imageFileNames = get().personalInfo.profileImages.map((image) => {
      //   return extractFileNameFromURL(image);
      // })


      const fileNames = await get().uploadImages();
    
      user.personalInfo.profileImages = fileNames;


      const response = await apiClient.post(registerUser, user);
      set({isProcessing: false, successMsg: response.data.message });
      // toast({
      //   variant: "success",
      //   title:"Success",
      //   description: 'You have added a new user successfully',
        
      // })
      
    } catch (e) {
      const error = e as Error ;
      console.log("Error saving user", e );
      set({ errorMsg: `${error.message} Failed to save user. Please try again later.`, isProcessing:false});
      toast({
        variant: "destructive",
        title:"Failed",
        description: error.message,
        
      })
    }
  },
  handleSiblingDialog: (isOpen) => {
    set({ isSiblingDialogOpen: isOpen });
  },
  ///
  addPersonalInfo: (personalInfo) => {
    /// calculate age based on current date and dob

    const dob = new Date(personalInfo.dob);
    const todayDate = new Date();
    const age = todayDate.getFullYear() - dob.getFullYear();
    personalInfo.age = age;
    // const profileImges = get().profileImageFiles.map((file) =>
    //   URL.createObjectURL(file)
    // );
   
    set({ personalInfo: personalInfo , isProcessing:false});
    // toast({
    //   variant: "success",
    //   title:"Saved",
    //   description: 'Personal Information saved successfully',
      
    // })
    // get().handleNext();
  },
  saveAllContactInfo: (contact, residenceAddr, permanentAddr) => {
    set({
      contactInfo: contact,
      residenceInfo: residenceAddr,
      permanentInfo: permanentAddr,
    });
    
    // get().handleNext();

  },

  addEduAndProfInfo: (eduAndProfInfo) => {
    eduAndProfInfo.income = parseInt(eduAndProfInfo.income.toString());
    set({ eduAndProfInfo: eduAndProfInfo });
    
    // get().handleNext();

  },
  addCultureAndReligiousInfo: (cultureAndReligiousInfo) => {
    set({ cultureAndReligiousInfo: cultureAndReligiousInfo });
    
    // get().handleNext();
  },
  addFamilyInfo: (familyInfo) => {
    set({ familyInfo: familyInfo });
   
  },

  addSibling: (sibling) => {
    sibling.age = parseInt(sibling.age.toString());
    set((state) => {
      const updatedSiblings = [...state.siblings, sibling];
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
  assignUserData: (user: IUser) => {
    get().addPersonalInfo(user.personalInfo)
    get().saveAllContactInfo(
      user.contactInfo,
      user.residentialAddr,
      user.permanentAddr
    );

    get().addEduAndProfInfo(user.eduAndProfInfo);
    get().addCultureAndReligiousInfo(user.cultureAndReligiousInfo);
    get().addFamilyInfo(user.familyInfo);
     
    set((state) => ({
      siblings: [...state.siblings, ...user.familyInfo.siblings],
      user: user,
    }));
    get().addSpouseInfo(user.spouseExpectation);

  },
}));

export default useUserStore;
// ============================================================== ///

export interface IFetchUserStore {
  isLoading: boolean;
  errorMsg: string;
  showError: boolean;
  successMsg: string | null;
  simulateError: (error: boolean) => void;
  users: IUser[];
  user: IUser | null;
  getUsers: (searchStr:string) => Promise<IUser[]>;
  getUserTableData: (users: IUser[]) => Users[];
  getSingleUserByEmail(email: string): Promise<IUser>;
  deleteImage: (imageUrl: string) => void;
  extractFileNameFromURL: (imageUrl: string) => string;
  deleteUserByEmail:(email:string) => Promise<void>;
}

export const useFetchUserStore = create<IFetchUserStore>((set) => ({
  isLoading: true,
  errorMsg: "",
  successMsg: "",
  showError: false,
  simulateError: (error: boolean) => {
    set({ showError: error });
  },
  users: [],
  user: null,

  deleteUserByEmail: async (email) => {
    try {
      set({isLoading:true});
      const response = await apiClient.delete(`${deleteUser}/${email}`);
      console.log("Response is ",response);
      if(response.status === 200){
        set({successMsg: response.data.message, isLoading:false,});
        window.location.reload();
      }
    }catch (e){
      console.log(e)
      const error = e as Error;
      set({errorMsg: error.message??"Failed to delete user. Please try again later.",isLoading:false})
    }
  },

  getUsers: async (searchStr:string) => {
    try {
      
      if(!searchStr || searchStr === ""){
        set({ isLoading: true, errorMsg: "" });
      }
      
      const response = await apiClient.get(getUsers, {
        params: {
          limit: 10,
          search:searchStr
        },
      });
      if (response.status === 200) {
        console.log("Response is ", response.data.data);
        const fetchedUsers: IUser[] = response.data.data;
        set({ users: fetchedUsers, isLoading: false });
        return fetchedUsers;
      }
      return [];
    } catch (e) {
      console.log("Error fetching users", e);
      set({
        showError: true,
        errorMsg: "Failed to get users. Please try again later.",
        isLoading: false,
      });
      return [];
    }
  },
  getUserTableData: (users: IUser[]): Users[] => {
    // Implement the logic to convert IUser[] to Users[]
    const filteredUsers = users.map((user, index) => ({
      id: (index + 1).toString(),
      name: `${user.personalInfo.firstName} ${user.personalInfo.lastName}`,
      email: user.contactInfo.email,
      dob: formatDate(user.personalInfo.dob, "dd MMM, yyyy") ,
      phoneNumber: user.contactInfo.phoneNumber,
      jobType: user.eduAndProfInfo.jobType,
      docId: user._id || ""
    }));
    return filteredUsers;
  },

  getSingleUserByEmail: async (email) => {
    try {
      set({ isLoading: true, errorMsg: "" });
      const response = await apiClient.get(`${userByEmail}/${email}`);
      if (response.status === 200) {
        set({ user: response.data.data, isLoading: false });
        return response.data.data;
      }
    } catch (e) {
      console.log("Error fetching user by email", e);
      set({
        errorMsg: "Failed to get user. Please try again later.",
        isLoading: false,
      });
    }
  },
  

  deleteImage: async (imageUrl) => {
    try {
      const fileName = useFetchUserStore.getState().extractFileNameFromURL(
        imageUrl
      );
      /// remove file from store 
      if(!fileName) return;
      const response = await apiClient.delete(deleteImage,{params:{fileName}});
      if(response.status === 200){
        console.log("Image deleted successfully");
      }

    } catch (e) {
      console.log("Error deleting image", e);
    }
  },
  extractFileNameFromURL: (imageUrl) => {
    if(!imageUrl.includes("amazonaws.com")){
      return imageUrl;
    }
    const parsedUrl = new URL(imageUrl);
    const fileName = parsedUrl.pathname.split("/").pop();
    return fileName || "";
  }
}));
