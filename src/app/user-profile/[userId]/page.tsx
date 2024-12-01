"use client";
import Navbar from "@/components/home-page/navbar";
import { CardContent } from "@/components/ui/card";
import React, { useCallback, useEffect } from "react";
import BasicInfoSection from "@/components/user-profile/basic-info-section";
import AboutMeSection from "@/components/user-profile/about-me";
import HobbiesCard from "@/components/user-profile/hobbies";
import EducationAndProfessionCard from "@/components/user-profile/education-profession-info";
import {
  FamilyDetailsCard,
  CulturalReligiousDetailsCard,
} from "@/components/user-profile/family-details";
import ContactInfoCard from "@/components/user-profile/contact-info-card";
import Footer from "@/components/Footer";
import { SiblingDetailsCard } from "@/components/user-profile/sibling-details-card";
import { useMyProfileStore } from "@/stores/my-profile-store";

interface UserProfileParams {
  userId: string;
}

const ViewUserProfile = ({ params }: { params: Promise<UserProfileParams> }) => {
  const { userProfile, getMyProfile } = useMyProfileStore();
  
  const fetchUserProfile = useCallback(async () => {
    const { userId } = await params;
    if (!userId) return;
    console.log("user Id in USer Profilepage", userId);
    await getMyProfile(userId);
  }, [getMyProfile, params]);

  useEffect(() => {
    fetchUserProfile();
  }, [fetchUserProfile]);

  return (
    <main>
      <Navbar bgColor={"bg-primary"} />
      <section className="bg-secondary max-w-7xl w-full mx-auto pt-24 md:px-8 px-4 flex flex-col justify-center items-center">
        <BasicInfoSection 
          image={userProfile?.personalInfo.profileImages[0] || ""}
          height={userProfile?.personalInfo.height.toString() || ""}
          jobType={userProfile?.eduAndProfInfo.jobType||""}
          city={userProfile?.residentialAddr.city || ""}
          dob={userProfile?.personalInfo.dob || ""}
          name={`${userProfile?.personalInfo.firstName || ""} ${userProfile?.personalInfo?.middleName || ""} ${userProfile?.personalInfo?.lastName || ""}`}
         />
        <div className="w-full my-4 flex lg:flex-row flex-col gap-4 ">
          <AboutMeSection  aboutMe={userProfile?.personalInfo.aboutMe || ""}/>
          <HobbiesCard hobbies={userProfile?.personalInfo.hobbies || []}/>
        </div>
        <EducationAndProfessionCard eduAndProfInfo={userProfile?.eduAndProfInfo ?? null}/>
        <div className="w-full my-4 flex lg:flex-row flex-col gap-4">
          <FamilyDetailsCard  familyInfo={userProfile?.familyInfo ?? null}/>
          <CulturalReligiousDetailsCard culturalInfo={userProfile?.cultureAndReligiousInfo ?? null}/>
        </div>
        <SiblingDetailsCard siblings={userProfile?.familyInfo.siblings ?? null}/>

        <ContactInfoCard contactInfo={userProfile?.contactInfo ?? null} residenceInfo={userProfile?.residentialAddr ?? null} permanentInfo={userProfile?.permanentAddr ?? null} />

        <CardContent className="w-full my-4 mb-8 bg-sidebar-primary p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2 text-background">EXPECTATION</h2>
          <p className="text-gray-300 ">
            {userProfile?.spouseExpectation || ""}
          </p>
        </CardContent>
      </section>
      <Footer />
    </main>
  );
};

export default ViewUserProfile;
